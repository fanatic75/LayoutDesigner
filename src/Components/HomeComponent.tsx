import Plotter from "../roomHelper/Plotter";
import React, { useState,useEffect } from "react";
import StateProvider from "../providers/State/state";
import Room2D from "../Components/Room2D";
import Victor from 'victor';
import "../Views/HomeComponent.css";
import SvgPattern from "./SvgPattern";

function getDoorsForRoom(doors: Door[], room: RoomData): Door[][] {
    const doorsForRoom: Door[][] = [];
    if(room.coordinates!==undefined){
        const roomPolygon = room.coordinates.type === 'rect' ? Plotter.rectToPolygon(room.coordinates) : Plotter.getPointsFromString(room.coordinates.points);
    const noOfVertices = roomPolygon.length;
    for (let i = 0; i < noOfVertices; i++) {
        const next = (i + 1) % noOfVertices;

        const p0 = roomPolygon[i];
        const pn = roomPolygon[next];

        const v0 = new Victor(p0.x, p0.y);
        const vn = new Victor(pn.x, pn.y);

        const v_this = vn.clone().subtract(v0);
        doorsForRoom.push([]);

        doors.forEach((door) => {
            const vd = new Victor(door.origin.x, door.origin.y);
            const vd_norm = vd.clone().subtract(v0);
            if ((v_this.angle() === vd_norm.angle()) && (v_this.magnitude() >= vd_norm.magnitude())) {
                doorsForRoom[i].push(door);
            }
        });
    }
  
    }
    return doorsForRoom;
    
}


function HomeComponent(props: any) {
    const [rooms,updateRooms]=useState(null);
    const [doors,updateDoors]=useState(null);
    let selectedRoom = null;
    let state: StateProvider = new StateProvider;
    let actions: any = {
        onRoomClick: (id: RoomData) => {
           
            state.selectedRoom = id;
        }
    };
   

    useEffect(() => {
        getPlotData().then((data) => {
            
            if (data.doors !== undefined) {
               updateDoors(data.doors);
            }
            if (data.rooms !== undefined) {
                updateRooms(data.rooms);
            }
        })



    });

    function getPlotData(): Promise<any> {
        return Promise.resolve(props.jsonValue);
    }
    return (

        <div id="layoutView" className="layoutcontainer">
            <div className="page-room">
                <div className="popout" id="home-layout">
                    <svg id="home-blue-print" preserveAspectRatio="xMinYMin meet" version="1.1" viewBox="0 0 100 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        {
                            //@ts-ignore
                            rooms!==null? rooms.map((room)=> ( <Room2D room={room} key={room.roomId} actions={actions}/>)):null
                        }

                        {/**  <g>
                                    <Door2D doors={doors}/>
                                </g> */}
                    </svg>
                </div>
                <SvgPattern />
            </div >
        </div >
    );

}




export default HomeComponent;