import React, { useState } from "react";
import PropTypes from "prop-types";
import "../Views/inputscreen.css";
import { withStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
const styles = theme => ({
    heading: {
        color: "#fff",
        marginLeft: "42%",
        marginTop: "2%",
    },
    jsonfield: {
        background: "#000",
      
    },
    textField: {
        fontFamily: "Roboto",
        height:"79vh",
        margin:"1%",
        width:"95%",
        "&::-webkit-scrollbar":{
            background:"transparent",
          },
          resize:"none",
    }
});
function InputScreen(props) {
    const [jsonValue,updateJson] = useState(props.jsonValue);
    const {classes}=props;
    
    function handleChange(e){  //handle change function for input text area.      
        updateJson(e.target.value.toString());
        props.handleUpdateJsonString(e.target.value.toString());
                  
    }
    return (
        <div className="container">
            <Typography className={classes.heading} component="h3">
                Json Data
        </Typography>
            <Paper className={classes.jsonfield} elevation={1}>
                <textarea
                    type="text"
                    placeholder="Enter the Json data to make a Layout."
                    className={classes.textField}
                    onChange={e => handleChange(e)}
                    value={jsonValue}
                />
            </Paper>
        </div>
    );
}

InputScreen.propTypes = {
    classes: PropTypes.object.isRequired,
    jsonValue:PropTypes.string,
    handleUpdateJsonString: PropTypes.func.isRequired

}
export default withStyles(styles)(InputScreen);