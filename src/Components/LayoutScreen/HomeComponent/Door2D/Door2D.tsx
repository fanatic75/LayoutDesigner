import React,{useState,useEffect} from "react";
import "../../../../Views/door2d.scss";
export default function Door2D(props:any){
    
const [door,updateDoor]=useState(props.door);
useEffect(()=>{
    updateDoor(props.door);
});
let doorStyle={
    stroke:door.color!==undefined?door.color:"#fff",
    transformOrigin:door.origin!==undefined?`${door.origin.x}px ${door.origin.y}px`:undefined,
    transform:door.orientation!==undefined?`rotate(${door.orientation}deg)`:undefined,
}
return(
    
    <line 
    x1={door.origin.x}
    y1={door.origin.y}
    x2={door.origin.x+door.length}
    y2={door.origin.y}
    style={doorStyle}
    className="door"
    
    />
);
}