// testing 

// nodejs library that concatenates classes
import classNames from "classnames";
import React, { useState } from 'react';
import { Form, Col, InputGroup } from 'react-bootstrap';

// react components for routing our app without refresh
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';

import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import styles2 from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";
import styles1 from "assets/jss/material-kit-react/views/components.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import blankMap from "assets/img/blank_map.jpg";
import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";
import { isConstructorDeclaration } from "typescript";
import PopUp from "views/PopUp/PopUp.js"; 


  
const useStyles1 = makeStyles(styles1);
const useStyles2 = makeStyles(styles2);
const useStyles = makeStyles(styles);



export default function VotingMap(props) {
    const classes1 = useStyles1();
    const classes2 = useStyles2();
    const classes = useStyles();
    const { ...rest } = props;

    return (
    <div>
      <Header
          //brand="Material Kit React"
          rightLinks={<HeaderLinks />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          {...rest}
        />
       <Parallax image={require("assets/img/Background_Blue.png")} style={{ height: "1020px" }}>
          <div className={classes1.container} style={{ marginRight: "0px", marginTop: "0px" }}>
            <GridContainer>
              <GridItem>
                <div className={classes1.brand}>

                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
  
        <div className={classNames(classes1.main, classes1.mainRaised3)}>
        <div className={classes2.sections}>
          <div className={classes2.container}>
            <div className={classes2.title}>
            <h2><img className={classes.votingMap}src={blankMap}style={{margin: "auto"}}></img></h2>
            <PopUp></PopUp>
      
        </div>
        </div>
        </div>
        </div>
    </div>

    );

}