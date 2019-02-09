import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";


const styles = theme => ({
  root: {

  }
});

class LayoutScreen extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    const { classes, jsonValue } = this.props;
    return (
      <React.Fragment>
        <Paper className={classes.root} elevation={1} >
          {/* 
            Object.keys(this.props.jsonValue).map((key) => {
              return (<p>{key} => {jsonValue[key]}</p>);
            })
          */} 
        </Paper>
      </React.Fragment>
    );
  }
}

LayoutScreen.propTypes = {
  classes: PropTypes.object.isRequired,
  jsonValue: PropTypes.object.isRequired,
};

export default withStyles(styles)(LayoutScreen);
