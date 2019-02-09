import React from "react";
import PropTypes from "prop-types";
import "../inputscreen.css";
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
      
    }

    return false;
};

class InputScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            jsonValue: "",
        }
    }
    

    handleChange(e) {
        if (!tryParseJSON(e.target.value)) {
           
        } else {
            this.setState({
                jsonValue: e.target.value,
            });
            this.props.updateJson(this.state.jsonValue);
        }
    }

    render() {
        const { classes } = this.props;
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
                        onChange={e => this.handleChange(e)}
                    />
                </Paper>

            </div>
        );
    }
}

InputScreen.propTypes = {
    classes: PropTypes.object.isRequired,
    updateJson: PropTypes.func.isRequired
}
export default withStyles(styles)(InputScreen);