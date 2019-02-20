import React from "react";
import Label2d from "./Label2d";
import "../Views/Room2D.scss";
export default function Room2D(props:any){

    const {room}=props;
    return(
        <g  id={room.roomId!==undefined?room.roomId:null} >
        {
                room.coordinates!==undefined&&room.coordinates.type==="rect"&&
                    <rect 
                    x={room.coordinates.origin.x}
                    y={room.coordinates.origin.y}
                    width={room.coordinates.w}
                    height={room.coordinates.h}
                    className={`room ${room.type}`} />
        }     
         {       room.coordinates!==undefined&&room.coordinates.type==="polygon"&&
                    <polygon 
                    points={room.coordinates.points}
                    className={`room ${room.type}`}/> 
        }
        <Label2d room={room}/>
        
        {/** <svg:g devices2d [room]="room" class="device-numbers"></svg:g> */} 
      </g>
      
    );
}