import React, { useState } from 'react';
import AppBar from "./Components/AppBar/AppBar";
import LayoutScreen from "./Components/LayoutScreen/LayoutScreen";
import InputScreen from "./Components/InputScreen/InputScreen";
import './Views/App.css';

//starting of App

function App(){
  let jsonStringInitial=`{
    "rooms":[
    
    
    
    {
      "type": "balcony",
      "label": {
        "name": "Balcony"
      },
      "coordinates": {
        "type": "rect",
        "origin": {
          "x": 1,
          "y": 1
        },
        "w": 98,
        "h": 98
      },
      
      "roomId": 1,
      "active": false,
      "floor": "wooden"
    }],
 "doors":[
{
  "origin": {
    "x": 42,
    "y": 5
  },
  "id":1,
  "length": 10,
  "orientation": 0
}


]
    
    }`
  //using jsonValue as a global state to update in both of the screens.
  //using updateJson function to edit the jsonValue as the user types.
  const [jsonString,updateJsonString]=useState(jsonStringInitial);
  const [currentRoom,updateCurrentRoom]=useState(null);
  //function is being to update json global state value from child component.
  function handleUpdateJsonString(jsonString){
    updateJsonString(jsonString);
  }


  return(
    <React.Fragment>
      <AppBar updateCurrentRoom={updateCurrentRoom}/>
      <div className="app-body">
        <LayoutScreen currentRoom={currentRoom} updateCurrentRoom={updateCurrentRoom} jsonString={jsonString} /> {/* Layout Screen component taking jsonValue as a prop*/}
        <InputScreen jsonString={jsonString} handleUpdateJsonString={handleUpdateJsonString}/> {/* Input Screen component taking jsonValue as a prop and the callback function to update the prop.*/}
      </div>
    </React.Fragment>
  );
}
export default App;
