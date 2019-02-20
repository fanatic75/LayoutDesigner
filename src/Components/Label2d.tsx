import React from "react";
import RoomHelper from "../roomHelper/roomHelper";
import Plotter from "../roomHelper/Plotter";
import "../Views/label2d.scss";
export default function Label2d(props:any){
    const room=props.room;
    function calculateLabelPosition(room: RoomData) {
        const CONSTS = {
          MAX_SIZE_FACTOR: 2,
          MIN_SIZE_FACTOR: 0.5,
          SIDE_BUFFER: 0.25,
        };
        
        const roomCoordinates = room.coordinates.type === 'rect' ? room.coordinates as RoomRect : RoomHelper.getBoundingRect(Plotter.getPointsFromString((room.coordinates as RoomPoly).points));
        const labelPosition: RoomLabel = {
            //@ts-ignore
            length: room.label.length,
            //@ts-ignore
            orientation: room.label.orientation,
            //@ts-ignore
            coordinates: room.label.coordinates,
            //@ts-ignore
            name: room.label.name,
          fitRatio: 1,
        };
        // Text height hack
        if (
            //@ts-ignore
            room.label.length === undefined) {// calculate length
          const maxLength = 
          //@ts-ignore
          room.label.name.length * CONSTS.MAX_SIZE_FACTOR;
          if (maxLength < roomCoordinates.w) {// the label can fit
            labelPosition.length = maxLength;
          } else {
            // Break the label
            const labelArr =
            //@ts-ignore
            room.label.name.split(' ');
            // Find longest word
            let maxWordLength = 0;
            labelArr.forEach((word) => maxWordLength = word.length > maxWordLength ? word.length : maxWordLength);
            maxWordLength *= CONSTS.MAX_SIZE_FACTOR;
            // Then find if it fits
            if (maxWordLength < roomCoordinates.w) {// the label can fit
              labelPosition.length = maxWordLength;
            } else {// if it still doesnt fit
              if (maxLength < roomCoordinates.h) {// if it fits height wise
                labelPosition.length = maxLength;
                labelPosition.orientation = 270;
              } else {// if it still doesn't fits
                const lengthToFit = Math.max(roomCoordinates.w, roomCoordinates.h);
                labelPosition.fitRatio = (lengthToFit / maxWordLength) * 0.9;
                if (labelPosition.fitRatio >= 1) {
                  labelPosition.fitRatio = 1;
                }
                if (labelPosition.fitRatio > CONSTS.MIN_SIZE_FACTOR) {
                  labelPosition.length = lengthToFit;
                }
                if (roomCoordinates.w >= roomCoordinates.h) {
                  labelPosition.orientation = 0;
                }
              }
              // find the fitting ratio
            }
          }
        }
        if (
            //@ts-ignore
            room.label.orientation !== undefined) {
          labelPosition.orientation = 
          //@ts-ignore
          room.label.orientation;
        }
        if (
            //@ts-ignore
            room.label.coordinates === undefined) {
          labelPosition.coordinates = {
            x: 0,
            y: 0,
          };
          labelPosition.coordinates.x = roomCoordinates.origin.x + (roomCoordinates.w / 2); // - positionAdjust.x;
          labelPosition.coordinates.y = roomCoordinates.origin.y + (roomCoordinates.h / 2); // - positionAdjust.y;
        }
        labelPosition.length = Math.floor(
            //@ts-ignore
            labelPosition.length * (1 - CONSTS.SIDE_BUFFER));
        return labelPosition;
      }
      const label=calculateLabelPosition(room);
    return(
        <foreignObject
        lengthAdjust="spacing"
        x={
            //@ts-ignore
            label.coordinates.x - label.name.length*3/2}
        y={
            //@ts-ignore
            label.coordinates.y-2.5
        }    
        width={label.name.length*3}
        height={5}
        transform={
            //@ts-ignore
            label.orientation !== undefined ? "rotate("+label.orientation+" "+label.coordinates.x+" "+label.coordinates.y+")":undefined
        } 
        className="roomNameText"    
        >
        <p>{label.name}</p>
        </foreignObject>
    );
}


