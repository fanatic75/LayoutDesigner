import React ,{useState,useEffect} from "react";
import RoomHelper from "../../../../../roomHelper/roomHelper";
import Plotter from "../../../../../roomHelper/Plotter";
import "../../../../../Views/label2d.scss";
export default function Label2d(props:any){
    const [label,updateLabel]=useState(props.room.label);
    const room=props.room;
    function calculateLabelPosition(room: RoomData) : any {
      const CONSTS = {
        MAX_SIZE_FACTOR: 2,
        MIN_SIZE_FACTOR: 0.5,
        SIDE_BUFFER: 0.25,
      };
  
      
      const roomCoordinates = room.coordinates!==undefined&&room.coordinates.type === 'rect' ?
        room.coordinates as RoomRect : RoomHelper.getBoundingRect(Plotter.getPointsFromString((room.coordinates as RoomPoly).points));
      if(roomCoordinates!==undefined){
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
            //@ts-ignore
          if(room.label.name!==undefined){
            //@ts-ignore

            const maxLength = room.label.name.length * CONSTS.MAX_SIZE_FACTOR;
          if (maxLength < roomCoordinates.w) {// the label can fit
            labelPosition.length = maxLength;
          } else {
            // Break the label
            //@ts-ignore
            const labelArr = room.label.name.split(' ');
            // Find longest word
            let maxWordLength = 0;
            labelArr.forEach((word) => maxWordLength = word.length > maxWordLength ? word.length : maxWordLength);
            maxWordLength *= CONSTS.MAX_SIZE_FACTOR;
            // Then find if it fits
            console.log("maxWordLength is "+maxWordLength+" and maxLength is "+maxLength);
            if (maxWordLength < roomCoordinates.w) {// the label can fit
              console.log("max word length is still smaller than width of the room");
              labelPosition.length = maxWordLength;
            } else {// if it still doesnt fit
              console.log("max word length cannot fit inside of the room");
              if (maxLength < roomCoordinates.h) {// if it fits height wise
                labelPosition.length = maxLength;
                console.log("max word should become vertical to fit inside the room");
                labelPosition.orientation = 270;
              } else {// if it still doesn't fits
  
              console.log("nothing is working anymore and we will find the length to fit now");
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
            //@ts-ignore
          labelPosition.orientation = room.label.orientation;
        }
        if (
          //@ts-ignore
          room.label.coordinates === undefined) {
            console.log("room.label.coordinates is undefined");
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
            
      }
       
    }
      useEffect(()=>{
        updateLabel(calculateLabelPosition(room));
      },[room]);
    return(
        <foreignObject
        lengthAdjust="spacing"
        //@ts-ignore
        x={
            //@ts-ignore
           label!==undefined&&label.coordinates!==undefined?label.coordinates.x - label.name.length*3/2:undefined}
        //@ts-ignore
        y={
            //@ts-ignore
            label!==undefined&&label.coordinates!==undefined?label.coordinates.y-2.5:undefined
        }    
        //@ts-ignore
        width={ 
          //@ts-ignore
          label!==undefined&&label.name!==undefined&&label.name.length*3
        }
        height={5}
        //@ts-ignore
        transform={
            //@ts-ignore
          
            label!==undefined&&label.coordinates!==undefined&&label.orientation!==undefined?"rotate("+label.orientation+" "+label.coordinates.x+" "+label.coordinates.y+")":undefined
        } 
        className="roomNameText"    
        >
        {
        label!==undefined&&label.name!==undefined&&<p>{
          //@ts-ignore
          label.name
          }</p>}
        </foreignObject>
    );
}


