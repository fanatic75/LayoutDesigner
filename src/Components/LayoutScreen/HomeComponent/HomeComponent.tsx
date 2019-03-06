import React, { useState, useEffect } from "react";
import Room2D from "./Room2D/Room2D";
import Door2D from "./Door2D/Door2D";
import Room3D from "./Room3D/Room3D";
import Victor from 'victor';
import "../../../Views/HomeComponent.css";
import "../../../Views/Main.scss";
import Plotter from "../../../roomHelper/Plotter";
import SvgPattern from "./SvgPattern";

function getDoorsForRoom(doors: Door[], room: RoomData): Door[][] {
    const doorsForRoom: Door[][] = [];
    if (room.coordinates !== undefined) {
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
    const [rooms, updateRooms] = useState(null);
    const [doors, updateDoors] = useState(null);



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
                    <svg id="home-blue-print" preserveAspectRatio="xMinYMin meet" version="1.1" viewBox="0 0 100 100" width="100%" height="80vh" xmlns="http://www.w3.org/2000/svg">
                        {
                            //@ts-ignore
                            rooms !== null ? rooms.map((room) => (<Room2D updateCurrentRoom={props.updateCurrentRoom} room={room} key={room.roomId} />)) : null
                        }


                        {
                            //@ts-ignore
                            doors !== null ? doors.map((door) => <Door2D door={door} key={door.id} />) : console.log('haha')

                        }

                    </svg>
                    <div className={props.currentRoom === null ? "display-none popout" : "popout"} id="rooms-layout">
                   
                   {
                        //@ts-ignore
                       rooms!==null?rooms.map((room)=>(<Room3D key={room.roomId}className={props.currentRoom!==room.roomId?"display-none room-layout":"room-layout"}/>)):null
                   }
                   
                    

                    </div>
                    {/**        <div rooms3d class="room-layout" [ngClass]="{'display-none': $state.selectedRoom !== room.roomId}"
        attr.data-room-id="{{ room.roomId }}" *ngFor="let room of rooms" [room]="room"></div>*/}
                </div>
                <SvgPattern />
            </div >
        </div >
    );

}




export default HomeComponent;