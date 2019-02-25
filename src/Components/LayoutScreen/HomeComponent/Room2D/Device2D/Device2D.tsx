import React,{useState,useEffect} from "react";
import RoomHelper from "../../../../../roomHelper/roomHelper";
import Plotter from "../../../../../roomHelper/Plotter";
import "../../../../../Views/device2d.scss";
export default function Device2D(props:any){
    function getRoomData() {
        return room.coordinates.type === 'rect' ?
          room.coordinates as RoomRect :
          RoomHelper.getBoundingRect(Plotter.getPointsFromString((room.coordinates as RoomPoly).points));
      }
      const tempDevice=[

        {
            type: 'wall_lamp',
            x: 8,
            y: 45,
            rotate: 270,
            deviceId: 3,
            scale: 1,
          }
      ]
    const [room,updateRoom]=useState(props.room.coordinates);
    const [devices,updateDevices]=useState([]);
    useEffect(()=>{
        if(room!==undefined&&room.coordinates!==undefined){
            updateRoom(getRoomData());
          
      }
      updateDevices(props.room.devices);
    },[props.room]);

    return(
        <svg>
        {devices!==undefined&&devices.map((device:any)=>{
         return( <circle
          key={device.deviceId}
          cx={room.origin.x + (room.w * device.x / 100)}
          cy={room.origin.y + (room.h * device.y / 100)}
          r={1}
          className="device-marking-grey"
         />  )
        })}
        </svg>
        

    );

}