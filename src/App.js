import React, { useState } from 'react';
import AppBar from "./Components/AppBar";
import LayoutScreen from "./Components/LayoutScreen";
import InputScreen from "./Components/InputScreen";
import './Views/App.css';

//starting of App

function App(){
  
  //using jsonValue as a global state to update in both of the screens.
  //using updateJson function to edit the jsonValue as the user types.
  const [jsonString,updateJsonString]=useState("");

  //function is being to update json global state value from child component.
  function handleUpdateJsonString(jsonString){
    updateJsonString(jsonString);
  }


  return(
    <React.Fragment>
      <AppBar />
      <div className="app-body">
        <LayoutScreen jsonString={jsonString} /> {/* Layout Screen component taking jsonValue as a prop*/}
        <InputScreen jsonString={jsonString} handleUpdateJsonString={handleUpdateJsonString}/> {/* Input Screen component taking jsonValue as a prop and the callback function to update the prop.*/}
      </div>
    </React.Fragment>
  );
}
export default App;
