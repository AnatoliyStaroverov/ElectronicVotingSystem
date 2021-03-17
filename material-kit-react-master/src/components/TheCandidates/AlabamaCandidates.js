import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
//import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import classNames from "classnames";
import ComponentsFile from "views/Components/Components.js"

import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";

const useStyles = makeStyles(styles);


export default function AlabamaCandidates(props) {
    const classes = useStyles();
    return (
        <div>
        <h2>Alabama State Candidates</h2>
        </div>     
        

    );




}