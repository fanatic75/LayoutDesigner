import React from "react";
import Label2d from "./Label2D/Label2d";
import Device2D from "./Device2D/Device2D";
import "../../../../Views/Room2D.scss";
export default function Room2D(props:any){

    const {room}=props;
    return(
        <g  onClick={()=>room.active===true?props.updateCurrentRoom(room):false} id={room.roomId!==undefined?room.roomId:null} >
        {
                room.coordinates!==undefined&&room.coordinates.type==="rect"&&         
                    <rect 
                    x={room.coordinates.origin!==undefined&&room.coordinates.origin.x}
                    y={room.coordinates.origin!==undefined&&room.coordinates.origin.y}
                    width={room.coordinates.w}
                    height={room.coordinates.h}
                    className={`room ${room.type}`} />
        }     
         {       room.coordinates!==undefined&&room.coordinates.type==="polygon"&&
                    <polygon 
                    points={room.coordinates.points}
                    className={`room ${room.type}`}/> 
        }
        {
        room.label!==undefined&&<Label2d room={room}/>
        }
        
        {/** <svg:g devices2d [room]="room" class="device-numbers"></svg:g> */} 
        {room!==undefined&& <g className="device-numbers"><Device2D room={room}/></g>}
      </g>
      
    );
}