import React ,{useState,useEffect} from "react";
import RoomHelper from "../roomHelper/roomHelper";
import Plotter from "../roomHelper/Plotter";
import "../Views/label2d.scss";
export default function Label2d(props:any){
    const [label,updateLabel]=useState(props.room.label);
    const room=props.room;
    function calculateLabelPosition(room: RoomData) {
        const CONSTS = {
          MAX_SIZE_FACTOR: 2,
          MIN_SIZE_FACTOR: 0.5,
          SIDE_BUFFER: 0.25,
        };

        function checkForUndefined(a:any){
          if(a!==undefined)
          return true;
          else
            return false;
        }
        
        const roomCoordinates =room.coordinates!==undefined? room.coordinates.type === 'rect' ? room.coordinates as RoomRect : RoomHelper.getBoundingRect(Plotter.getPointsFromString((room.coordinates as RoomPoly).points)):undefined
        const labelPosition: RoomLabel = {
            //@ts-ignore
            length: checkForUndefined(room.label)?room.label.length:null,
            //@ts-ignore
            orientation: checkForUndefined(room.label)?room.label.orientation:null,
            //@ts-ignore
            coordinates: checkForUndefined(room.label)?room.label.coordinates:null,
            //@ts-ignore
            name: checkForUndefined(room.label)?room.label.name:null,
          fitRatio: 1,
        };
        // Text height hack
        if(room.label!==undefined&&room.label.name!==undefined){
          if (
            //@ts-ignore

            room.label.length === undefined) {// calculate length
          const maxLength = 
          //@ts-ignore
          room.label.name.length * CONSTS.MAX_SIZE_FACTOR;
          if (
            //@ts-ignore
            maxLength < roomCoordinates.w) {// the label can fit
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
            if (
              //@ts-ignore
              maxWordLength < roomCoordinates.w ) {// the label can fit
              labelPosition.length = maxWordLength;
            } else {// if it still doesnt fit
              if (
                //@ts-ignore
                maxLength < roomCoordinates.h) {// if it fits height wise
                labelPosition.length = maxLength;
                labelPosition.orientation = 270;
              } else {// if it still doesn't fits
                const lengthToFit = Math.max(
                  //@ts-ignore
                  roomCoordinates.w, roomCoordinates.h);
                labelPosition.fitRatio = (lengthToFit / maxWordLength) * 0.9;
                if (labelPosition.fitRatio >= 1) {
                  labelPosition.fitRatio = 1;
                }
                if (labelPosition.fitRatio > CONSTS.MIN_SIZE_FACTOR) {
                  labelPosition.length = lengthToFit;
                }
                if (
                  //@ts-ignore
                  roomCoordinates.w >= roomCoordinates.h) {
                  labelPosition.orientation = 0;
                }
        }
         
              }
              // find the fitting ratio
            }
          }
        }
        if(room.label!==undefined&&room.label.name!==undefined){
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
        }
          //@ts-ignore
          labelPosition.coordinates.x = roomCoordinates.origin.x + (roomCoordinates.w / 2); // - positionAdjust.x;
          //@ts-ignore
          labelPosition.coordinates.y = roomCoordinates.origin.y + (roomCoordinates.h / 2); // - positionAdjust.y;
        }
        labelPosition.length = Math.floor(
            //@ts-ignore
            labelPosition.length * (1 - CONSTS.SIDE_BUFFER));
        return labelPosition;
      }
      useEffect(()=>{
        updateLabel(calculateLabelPosition(room));
      });
    return(
        <foreignObject
        lengthAdjust="spacing"
        x={
            //@ts-ignore
            label!==undefined&&label.coordinates!==undefined&&label.coordinates!==null?label.coordinates.x - label.name.length*3/2:0}
        y={
            //@ts-ignore
            label!==undefined&&label.coordinates!==undefined&&label.coordinates!==null?label.coordinates.y-2.5:0
        }    
        width={ 
          //@ts-ignore
          label!==undefined&&label.name!==undefined &&label.name!==null?label.name.length*3:0}
        height={5}
        transform={
            //@ts-ignore
           label!==undefined&& label.orientation !== undefined&&label.orientation!==null&&label.coordinates!==null ? "rotate("+label.orientation+" "+label.coordinates.x+" "+label.coordinates.y+")":undefined
        } 
        className="roomNameText"    
        >
        <p>{
          //@ts-ignore
         label!==undefined? label.name:null}</p>
        </foreignObject>
    );
}


