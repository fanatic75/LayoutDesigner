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
  },[props.jsonString]);


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


LayoutScreen.propTypes = {
  classes: PropTypes.object.isRequired,
  jsonString: PropTypes.string,
};

export default withStyles(styles)(LayoutScreen);
