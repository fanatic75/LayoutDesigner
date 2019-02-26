import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";


const styles = {
  root: {
    display:"flex",
    flexGrow: 1,
    maxWidth: "100%",
    height: "10vh",
  },
 
  heading: {
    margin: "auto",
    color:"white"
  },
  AppBar:{
    backgroundColor:"#144f69"
  },
  button:{
    backgroundColor: "transparent", /* Green */

  outline:"none",
  boxShadow:"0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
  padding: "15px 32px",
  textAlign: "center",
  textDecoration: "none",
  display: "inline-block",
  fontSize: "16px"
  }
};

function SimpleAppBar(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography className={classes.heading} variant="h6" color="inherit">
            Layout Designer
           
          </Typography>
          <button onClick={()=>props.updateCurrentRoom(null)} className={classes.button}>
          <img  src={require('./../AppBar/a.png')} alt="home" width="30" height="25"  >
          </img>
          </button>
        </Toolbar>
      </AppBar>
      
    </div>
  );
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  updateCurrentRoom:PropTypes.func.isRequired,
};

export default withStyles(styles)(SimpleAppBar);
