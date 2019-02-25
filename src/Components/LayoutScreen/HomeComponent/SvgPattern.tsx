import React from "react";
export default function SvgPattern(){
    return(
        <svg height="0" id="defs" version="1.1" width="0" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern height="40" id="woodenFloor" patternUnits="userSpaceOnUse" width="40">
                            <image xlinkHref="assets/img/floor.jpg" className="updateImagePath" height="40" width="40" x="0" y="0" />
                        </pattern>
                        <pattern height="10" id="marbleFloor" patternUnits="userSpaceOnUse" viewBox="0 0 1 1" width="10">
                            <image xlinkHref="assets/img/marble.jpg" className="updateImagePath" height="1" width="1" x="0" y="0"></image>
                        </pattern>

                        <pattern height="1" id="socket" patternUnits="objectBoundingBox" viewBox="0 0 1 1" width="1">
                            <image xlinkHref="assets/img/socket.png" className="updateImagePath" height="0.8" width="0.6" x="0.2" y="0.1"></image>
                        </pattern>
                        <pattern xlinkHref="#socket" id="socketOn">
                            <image xlinkHref="assets/img/socket-on.png" className="updateImagePath" height="0.8" width="0.6" x="0.2" y="0.1"></image>
                        </pattern >

                        <pattern height="1" id="tubelight" patternUnits="objectBoundingBox" preserveAspectRatio="none" viewBox="0 0 1 1" width="1">
                            <image xlinkHref="assets/img/tubelight.png" className="updateImagePath" height="1" preserveAspectRatio="none" width="1" x="0" y="0"></image>
                        </pattern >
                        <pattern xlinkHref="#tubelight" id="tubelightOn">
                            <image xlinkHref="assets/img/tubelight-on.png" className="updateImagePath" height="1" preserveAspectRatio="none" width="1" x="0" y="0"></image>
                        </pattern >

                        <pattern height="1" id="fan" patternUnits="objectBoundingBox" viewBox="0 0 1 1" width="1">
                            <image xlinkHref="assets/img/rotor.png" className="updateImagePath" height="1" width="1" x="0" y="0"></image>
                        </pattern >
                        <pattern xlinkHref="#fan" id="fanOn">
                            <image xlinkHref="assets/img/rotor-on.png" className="updateImagePath" height="1" width="1" x="0" y="0"></image>
                        </pattern >

                        <pattern height="1" id="wallLamp" patternUnits="objectBoundingBox" viewBox="0 0 1 1" width="1">
                            <image xlinkHref="assets/img/wall-lamp.png" className="updateImagePath" height="1" width="1" x="0" y="0"></image>
                        </pattern >
                        <pattern xlinkHref="#wallLamp" id="wallLampOn">
                            <image xlinkHref="assets/img/wall-lamp-on.png" className="updateImagePath" height="1" width="1" x="0" y="0"></image>
                        </pattern >

                        <pattern height="1" id="bulb" patternUnits="objectBoundingBox" viewBox="0 0 1 1" width="1">
                            <image xlinkHref="assets/img/bulb.png" className="updateImagePath" height="1" width="1" x="0" y="0"></image>
                        </pattern >


                        <pattern height="1" id="chandelier" patternUnits="objectBoundingBox" viewBox="0 0 1 1" width="1">
                            <image xlinkHref="assets/img/chandelier.png" className="updateImagePath" height="1" width="1" x="0" y="0"></image>
                        </pattern >
                        <pattern xlinkHref="#chandelier" id="chandelierOn">
                            <image xlinkHref="assets/img/chandelier-on.png" className="updateImagePath" height="1" width="1" x="0" y="0"></image>
                        </pattern >

                        <pattern height="1" id="bed" patternUnits="objectBoundingBox" viewBox="0 0 1 1" width="1">
                            <image xlinkHref="assets/img/bed_7.png" height="1" width="1" x="0" y="0"></image>
                        </pattern >

                        <pattern height="1" id="airconditioner" patternUnits="objectBoundingBox" viewBox="0 0 1 1" width="1">
                            <image xlinkHref="assets/img/airconditioner.png" className="updateImagePath" height="1" width="1" x="0" y="0"></image>
                        </pattern >
                        <pattern height="1" id="airconditionerOn" patternUnits="objectBoundingBox" viewBox="0 0 1 1" width="1">
                            <image xlinkHref="assets/img/airconditioner-on.png" className="updateImagePath" height="1" width="1" x="0" y="0"></image>
                        </pattern >

                        <pattern height="1" id="geyser" patternUnits="objectBoundingBox" viewBox="0 0 1 1" width="1">
                            <image xlinkHref="assets/img/geyser.png" className="updateImagePath" height="1" width="1" x="0" y="0"></image>
                        </pattern >
                        <pattern height="1" id="geyserOn" patternUnits="objectBoundingBox" viewBox="0 0 1 1" width="1">
                            <image xlinkHref="assets/img/geyser-on.png" className="updateImagePath" height="1" width="1" x="0" y="0"></image>
                        </pattern >

                        <pattern height="1" id="refrigerator" patternUnits="objectBoundingBox" viewBox="0 0 1 1" width="1">
                            <image xlinkHref="assets/img/refrigerator.png" className="updateImagePath" height="1" width="1" x="0" y="0"></image>
                        </pattern >
                        <pattern height="1" id="refrigeratorOn" patternUnits="objectBoundingBox" viewBox="0 0 1 1" width="1">
                            <image xlinkHref="assets/img/refrigerator-on.png" className="updateImagePath" height="1" width="1" x="0" y="0"></image>
                        </pattern >

                        <pattern height="1" id="television" patternUnits="objectBoundingBox" viewBox="0 0 1 1" width="1">
                            <image xlinkHref="assets/img/television.png" className="updateImagePath" height="1" width="1" x="0" y="0"></image>
                        </pattern >
                        <pattern height="1" id="televisionOn" patternUnits="objectBoundingBox" viewBox="0 0 1 1" width="1">
                            <image xlinkHref="assets/img/television-on.png" className="updateImagePath" height="1" width="1" x="0" y="0"></image>
                        </pattern >

                        <pattern height="1" id="sofa-1seat" patternUnits="objectBoundingBox" viewBox="0 0 1 1" width="1">
                            <image xlinkHref="assets/img/sofa-1seat.png" className="updateImagePath" height="1" width="1" x="0" y="0"></image>
                        </pattern >
                        <pattern height="1" id="sofa-2seat" patternUnits="objectBoundingBox" viewBox="0 0 1 1" width="1">
                            <image xlinkHref="assets/img/sofa-2seat.png" className="updateImagePath" height="1" width="1" x="0" y="0"></image>
                        </pattern >
                        <pattern height="1" id="table" patternUnits="objectBoundingBox" viewBox="0 0 1 1" width="1">
                            <image xlinkHref="assets/img/table.png" className="updateImagePath" height="1" width="1" x="0" y="0"></image>
                        </pattern >
                        <pattern height="1" id="dining-set" patternUnits="objectBoundingBox" viewBox="0 0 1 1" width="1">
                            <image xlinkHref="assets/img/dining-set.png" className="updateImagePath" height="1" width="1" x="0" y="0"></image>
                        </pattern >

                        <filter id="doorShadow" x="0" y="0" width="100%" height="100%">
                            <feGaussianBlur stdDeviation="2" result="offset-blur" />
                            <feComposite operator="out" in="SourceGraphic" in2="offset-blur" result="inverse" />
                            <feFlood floodColor="black" floodOpacity="1" result="color" />
                            <feComposite operator="in" in="color" in2="inverse" result="shadow" />
                            <feComposite operator="over" in="shadow" in2="SourceGraphic" />
                        </filter>
                    </defs >
                </svg >
    );
}