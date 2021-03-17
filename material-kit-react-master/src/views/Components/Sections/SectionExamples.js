import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

import landing from "assets/img/landing.jpg";
import profile from "assets/img/profile.jpg";

import styles from "assets/jss/material-kit-react/views/componentsSections/exampleStyle.js";

const useStyles = makeStyles(styles);

export default function SectionExamples() {
  const classes = useStyles();
  return (
    <div></div>
  );
}
