import React from "react";
export default function Room2D(props:any){

    const {room,actions}=props;
    return(
        <g  id={room.roomId}  onClick={actions.onRoomClick(room.roomId)}>
        {
          ()=>{
            
              if(room.coordinates.type==="rect"){
              return(
                <rect 
                x={room.coordinates.origin.x}
                y={room.coordinates.origin.y}
                width={room.coordinates.w}
                height={room.coordinates.h}
                /**className="room room.type" */  />
              );
            }else if(room.coordinates.type==="polygon"){
               return(
                <polygon 
                points={room.coordinates.points}
                /** className='room room.type'*//>
               ); 
            
            }
          }
        }
        
       {/**<svg:g label2d [room]="room">
            <g>
            
            </g>
        </svg:g>
        <svg:g devices2d [room]="room" class="device-numbers"></svg:g> */ }
      </g>
      
    );
}