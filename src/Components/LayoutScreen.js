import React,{useState,useEffect} from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import HomeComponent from "./HomeComponent";


const styles = theme => ({
  root: {
    maxWidth:"100%",
    maxHeight:"88vh",
    overflowY:"scroll"
  },
  text:{
    padding:"2%",
    wordBreak:"break-word"
  }
});

function tryParseJSON (jsonString){
  try {
      var o = JSON.parse(jsonString);

      // Handle non-exception-throwing cases:
      // Neither JSON.parse(false) or JSON.parse(1234) throw errors, hence the type-checking,
      // but... JSON.parse(null) returns null, and typeof null === "object", 
      // so we must check for that, too. Thankfully, null is falsey, so this suffices:
      if (o && typeof o === "object") {
        return o;
    }
  }
  catch (e) { 
    console.log("Not a json. Error in "+e);
  }

  return false;
};

function LayoutScreen(props){
  const[jsonValue,updateJson]=useState({});
  useEffect(()=>{
    handleChange();
  });


  function handleChange() {
    let temp=tryParseJSON(props.jsonString);
    if(typeof temp ==="object")
      updateJson(temp);
  }
 

  const {classes}=props;
  return(
<React.Fragment>
        <Paper className={classes.root} elevation={1} >
          <HomeComponent jsonValue={jsonValue}/> 
        </Paper>
      </React.Fragment>
        
  );
}


          /* 
            Object.keys(this.props.jsonValue).map((key) => {
              return (<p>{key} => {jsonValue[key]}</p>);
            })
          */
          /*
           <div class="page-room">
            <div class="popout" id="home-layout">
            <svg id="home-blue-print" preserveAspectRatio="xMinYMin meet" version="1.1" viewBox="0 0 100 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <g class="rooms2d">
                <Rooms2d rooms={rooms} actions={actions}></Rooms2d>
              </g>
              <g doors2d [doors]="doors"></g>
            </svg>
            <div class="popout" [ngClass]="{'display-none': $state.selectedRoom === null}" id="rooms-layout">
              <Rooms3d class="room-layout"
                data-room-id="{{room.roomId}}"/>
            </div>
          </div>

          <svg height="0" id="defs" version="1.1" width="0" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern height="40" id="woodenFloor" patternUnits="userSpaceOnUse" width="40">
                <image xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="assets/img/floor.jpg" class="updateImagePath" height="40" width="40" x="0" y="0"></image>
              </pattern>
              <pattern height="10" id="marbleFloor" patternUnits="userSpaceOnUse" viewBox="0 0 1 1" width="10">
                <image xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="assets/img/marble.jpg" class="updateImagePath" height="1" width="1" x="0" y="0"></image>
              </pattern>

              <pattern height="1" id="socket" patternUnits="objectBoundingBox" viewBox="0 0 1 1" width="1">
                <image xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="assets/img/socket.png" class="updateImagePath" height="0.8" width="0.6" x="0.2" y="0.1"></image>
              </pattern>
              <pattern xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#socket" id="socketOn">
                <image xlink:href="assets/img/socket-on.png" class="updateImagePath" height="0.8" width="0.6" x="0.2" y="0.1"></image>
              </pattern>

              <pattern height="1" id="tubelight" patternUnits="objectBoundingBox" preserveAspectRatio="none" viewBox="0 0 1 1" width="1">
                <image xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="assets/img/tubelight.png" class="updateImagePath" height="1" preserveAspectRatio="none" width="1" x="0" y="0"></image>
              </pattern>
              <pattern xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#tubelight" id="tubelightOn">
                <image xlink:href="assets/img/tubelight-on.png" class="updateImagePath" height="1" preserveAspectRatio="none" width="1" x="0" y="0"></image>
              </pattern>

              <pattern height="1" id="fan" patternUnits="objectBoundingBox" viewBox="0 0 1 1" width="1">
                <image xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="assets/img/rotor.png" class="updateImagePath" height="1" width="1" x="0" y="0"></image>
              </pattern>
              <pattern xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#fan" id="fanOn">
                <image xlink:href="assets/img/rotor-on.png" class="updateImagePath" height="1" width="1" x="0" y="0"></image>
              </pattern>

              <pattern height="1" id="wallLamp" patternUnits="objectBoundingBox" viewBox="0 0 1 1" width="1">
                <image xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="assets/img/wall-lamp.png" class="updateImagePath" height="1" width="1" x="0" y="0"></image>
              </pattern>
              <pattern xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wallLamp" id="wallLampOn">
                <image xlink:href="assets/img/wall-lamp-on.png" class="updateImagePath" height="1" width="1" x="0" y="0"></image>
              </pattern>

              <pattern height="1" id="bulb" patternUnits="objectBoundingBox" viewBox="0 0 1 1" width="1">
                <image xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="assets/img/bulb.png" class="updateImagePath" height="1" width="1" x="0" y="0"></image>
              </pattern>


              <pattern height="1" id="chandelier" patternUnits="objectBoundingBox" viewBox="0 0 1 1" width="1">
                <image xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="assets/img/chandelier.png" class="updateImagePath" height="1" width="1" x="0" y="0"></image>
              </pattern>
              <pattern xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#chandelier" id="chandelierOn">
                <image xlink:href="assets/img/chandelier-on.png" class="updateImagePath" height="1" width="1" x="0" y="0"></image>
              </pattern>

              <pattern height="1" id="bed" patternUnits="objectBoundingBox" viewBox="0 0 1 1" width="1">
                <image xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="assets/img/bed_7.png" height="1" width="1" x="0" y="0"></image>
              </pattern>

              <pattern height="1" id="airconditioner" patternUnits="objectBoundingBox" viewBox="0 0 1 1" width="1">
                <image xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="assets/img/airconditioner.png" class="updateImagePath" height="1" width="1" x="0" y="0"></image>
              </pattern>
              <pattern height="1" id="airconditionerOn" patternUnits="objectBoundingBox" viewBox="0 0 1 1" width="1">
                <image xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="assets/img/airconditioner-on.png" class="updateImagePath" height="1" width="1" x="0" y="0"></image>
              </pattern>

              <pattern height="1" id="geyser" patternUnits="objectBoundingBox" viewBox="0 0 1 1" width="1">
                <image xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="assets/img/geyser.png" class="updateImagePath" height="1" width="1" x="0" y="0"></image>
              </pattern>
              <pattern height="1" id="geyserOn" patternUnits="objectBoundingBox" viewBox="0 0 1 1" width="1">
                <image xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="assets/img/geyser-on.png" class="updateImagePath" height="1" width="1" x="0" y="0"></image>
              </pattern>

              <pattern height="1" id="refrigerator" patternUnits="objectBoundingBox" viewBox="0 0 1 1" width="1">
                <image xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="assets/img/refrigerator.png" class="updateImagePath" height="1" width="1" x="0" y="0"></image>
              </pattern>
              <pattern height="1" id="refrigeratorOn" patternUnits="objectBoundingBox" viewBox="0 0 1 1" width="1">
                <image xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="assets/img/refrigerator-on.png" class="updateImagePath" height="1" width="1" x="0" y="0"></image>
              </pattern>

              <pattern height="1" id="television" patternUnits="objectBoundingBox" viewBox="0 0 1 1" width="1">
                <image xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="assets/img/television.png" class="updateImagePath" height="1" width="1" x="0" y="0"></image>
              </pattern>
              <pattern height="1" id="televisionOn" patternUnits="objectBoundingBox" viewBox="0 0 1 1" width="1">
                <image xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="assets/img/television-on.png" class="updateImagePath" height="1" width="1" x="0" y="0"></image>
              </pattern>

              <pattern height="1" id="sofa-1seat" patternUnits="objectBoundingBox" viewBox="0 0 1 1" width="1">
                <image xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="assets/img/sofa-1seat.png" class="updateImagePath" height="1" width="1" x="0" y="0"></image>
              </pattern>
              <pattern height="1" id="sofa-2seat" patternUnits="objectBoundingBox" viewBox="0 0 1 1" width="1">
                <image xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="assets/img/sofa-2seat.png" class="updateImagePath" height="1" width="1" x="0" y="0"></image>
              </pattern>
              <pattern height="1" id="table" patternUnits="objectBoundingBox" viewBox="0 0 1 1" width="1">
                <image xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="assets/img/table.png" class="updateImagePath" height="1" width="1" x="0" y="0"></image>
              </pattern>
              <pattern height="1" id="dining-set" patternUnits="objectBoundingBox" viewBox="0 0 1 1" width="1">
                <image xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="assets/img/dining-set.png" class="updateImagePath" height="1" width="1" x="0" y="0"></image>
              </pattern>

              <filter id="doorShadow" x="0" y="0" width="100%" height="100%">
                <feGaussianBlur stdDeviation="2" result="offset-blur" />
                <feComposite operator="out" in="SourceGraphic" in2="offset-blur" result="inverse" />
                <feFlood flood-color="black" flood-opacity="1" result="color" />
                <feComposite operator="in" in="color" in2="inverse" result="shadow" />
                <feComposite operator="over" in="shadow" in2="SourceGraphic" />
              </filter>

              <linearGradient
                *ngFor="let angle of this.stateProvider.wallAngles"
                gradientUnits="objectBoundingBox"
                attr.gradientTransform="rotate({{angle}}, 0.5, 0.5)"
                attr.id="wall-gradient-{{angle}}">
                <stop offset="10%" stop-color="#D3C5B8" stop-opacity="0.9"></stop>
                <stop offset="80%" stop-color="#D3C5B8" stop-opacity="0.6"></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>      
           */
   

LayoutScreen.propTypes = {
  classes: PropTypes.object.isRequired,
  jsonString: PropTypes.string,
};

export default withStyles(styles)(LayoutScreen);
