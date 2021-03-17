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
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import 'date-fns';




//import Components2 from "views/Components/Components2.js"
const styles3 = {
  textspacing:
  {
    minWidth: "250px",
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
  },
  textspacing2:
  {
    minWidth: "450px",
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
  },
  textspacing3:
  {
    //minWidth: "450px",
    maxWidth: "170px",
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    width: "170px",
  },
  textspacing4:
  {
    //minWidth: "450px",
    maxWidth: "100px",
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    width: "100px",
  },
  DatePicker:
  {
    display: 'flex',
    flexDirection: 'row',
    minWidth: 120,
    justifyContent: 'flex-start',
    fullWidth: true,
    marginTop: '15px',
  },
}

const useStyles4 = makeStyles((theme) => ({
  DropDown_Options:
  {
      display: 'flex',
      flexDirection: 'row',
      minWidth: 80,
      justifyContent: 'flex-start',
      //fullWidth: true,
      marginTop: '27px',
  },
  selectEmpty1: {
      marginTop: theme.spacing(1),
  },
}));

const useStyles5 = makeStyles((theme) => ({
  root: {
      '& > *': {
          margin: "0px",
          marginRight: "43px",
          marginTop: "63px",
          float: 'right',
      },
  },
}));

//const useStyles = makeStyles(styles);
const useStyles1 = makeStyles(styles1);
const useStyles2 = makeStyles(styles2);
const useStyles3 = makeStyles(styles3);



export default function CreateAccount(props) {
  const classes1 = useStyles1();
  const classes2 = useStyles2();
  const classes3 = useStyles3();
  const classes4 = useStyles4(); 
  const classes5 = useStyles5(); 

  const { ...rest } = props;
  const [validated, setValidated] = useState(false);


  const handleChange = (event) => {
    const name = event.target.name;
    let value = event.target.value;

    if (event.target.id == "demo-simple-select-required") {
      //Do we have to do this for each state? 
      value = event.target.value == "AL";

  }
    this.setState({ [name]: value });
  }


  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);

    fetch('/register', {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(form),
      cache: "no-cache",
      headers: new Headers({ "content-type": "application/json" })

    }).then(function (response) {
      if (response.status == 200) {
        console.log("fetch successfull");

      }
      else {
        console.log(response.status);

      }
    }) // end of fetch
  }


  return (
    <div>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
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

        <div className={classNames(classes1.main, classes1.mainRaised2)}>
          <div className={classes2.sections}>
            <div className={classes2.container}>
              <div className={classes2.title}>
                <h2 style={{ textAlign: "center", marginTop: "-33px" }}>Complete the Form Below to Begin Voting Today!</h2>
                <h1 className={classes1.subtitles_createAccount}>Identification</h1>
                <GridContainer style={{ marginTop: "0px", }}>
                  <GridItem xs={12} sm={12} md={3} style={{ marginRight: "100px", marginLeft: "40px" }}>
                    <CustomInput
                      labelText="First Legal Name"
                      id="FirstLegalName-id"
                      formControlProps={{
                      }}
                      inputProps={{
                        name: "FirstLegalName",
                        className: classes3.textspacing,
                      }}
                    />
                    <CustomInput
                      labelText="SSN (Social Security Number)"
                      id="ssn-id"
                      formControlProps={{
                      }}
                      inputProps={{
                        name: "SSN(SocialSecurityNumber)",
                        className: classes3.textspacing,
                      }}
                    />
                  </GridItem>

                  <GridItem xs={12} sm={12} md={3} style={{ marginRight: "100px" }}>
                    <CustomInput
                      labelText="Middle Name"
                      id="MiddleName-id"
                      formControlProps={{
                      }}
                      inputProps={{
                        name: "MiddleName",
                        className: classes3.textspacing,
                      }}
                    />
                    <CustomInput
                      labelText="Driver License Number"
                      id="DriverLicenseNumber-id"
                      formControlProps={{
                      }}
                      inputProps={{
                        name: "DriverLicenseNumber",
                        className: classes3.textspacing,
                      }}
                    />
                  </GridItem>

                  <GridItem xs={12} sm={12} md={3} style={{ marginTop: "0px" }}>
                    <CustomInput
                      labelText="Last Name"
                      id="LastName-id"
                      formControlProps={{
                        marginTop: "25px",
                      }}
                      inputProps={{
                        name: "LastName",
                        className: classes3.textspacing,
                      }}
                    />
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <KeyboardDatePicker
                        margin="normal"
                        id="date-picker-dialog"
                        label="Date of Birth"
                        format="MM/dd/yyyy"
                        //value={this.state.ReviewDate}
                        className={classes3.DatePicker}
                        onChange={(date) => this.setState({ ["DateOfBirth"]: date })}
                        KeyboardButtonProps={{ 'aria-label': 'change date', }}
                      />
                    </MuiPickersUtilsProvider>
                  </GridItem>

                </GridContainer>
                <h1 className={classes1.subtitles_createAccount}>Address and Contact Information</h1>
                <GridContainer style={{ marginTop: "0px", }}>
                  <GridItem xs={12} sm={12} md={3} style={{ marginRight: "100px", marginLeft: "40px" }}>
                    <CustomInput
                      labelText="Street Address"
                      id="StreetAddress-id"
                      formControlProps={{
                      }}
                      inputProps={{
                        name: "StreetAddress",
                        className: classes3.textspacing2,
                      }}
                    />
                  </GridItem>

                  <GridItem xs={12} sm={12} md={3} style={{ marginRight: "40px", marginLeft:"140px" }}>
                    <CustomInput
                      labelText="City"
                      id="City-id"
                      formControlProps={{
                      }}
                      inputProps={{
                        name: "City",
                        className: classes3.textspacing3,
                      }}
                    />
                  </GridItem>

                  <GridItem xs={12} sm={12} md={3} style={{ marginLeft: "-94px", width: "142px", marginTop:"-15px"  }}>
                    <FormControl className={classes4.DropDown_Options}>
                      <InputLabel id="demo-simple-select-required-label">State</InputLabel>
                      <Select
                        labelId="demo-simple-select-required-label"
                        id="demo-simple-select-required"
                        //value={this.state.IsApplicable}
                        onChange={handleChange}
                        className={classes4.selectEmpty}
                        name="State"
                        style={{ width: '100px' }}
                      >
                        <MenuItem value={true}>AL</MenuItem>
                        <MenuItem value={true}>AK</MenuItem>
                        <MenuItem value={true}>AZ</MenuItem>
                        <MenuItem value={true}>AR</MenuItem>
                        <MenuItem value={true}>CA</MenuItem>
                        <MenuItem value={true}>CO</MenuItem>
                        <MenuItem value={true}>CT</MenuItem>
                        <MenuItem value={true}>DE</MenuItem>
                        <MenuItem value={true}>FL</MenuItem>
                        <MenuItem value={true}>GA</MenuItem>
                        <MenuItem value={true}>HI</MenuItem>
                        <MenuItem value={true}>ID</MenuItem>
                        <MenuItem value={true}>IL</MenuItem>
                        <MenuItem value={true}>IN</MenuItem>
                        <MenuItem value={true}>IA</MenuItem>
                        <MenuItem value={true}>KS</MenuItem>
                        <MenuItem value={true}>KY</MenuItem>
                        <MenuItem value={true}>LA</MenuItem>
                        <MenuItem value={true}>ME</MenuItem>
                        <MenuItem value={true}>MD</MenuItem>
                        <MenuItem value={true}>MA</MenuItem>
                        <MenuItem value={true}>MI</MenuItem>
                        <MenuItem value={true}>MN</MenuItem>
                        <MenuItem value={true}>MS</MenuItem>
                        <MenuItem value={true}>MO</MenuItem>
                        <MenuItem value={true}>MT</MenuItem>
                        <MenuItem value={true}>NE</MenuItem>
                        <MenuItem value={true}>NV</MenuItem>
                        <MenuItem value={true}>NH</MenuItem>
                        <MenuItem value={true}>NJ</MenuItem>
                        <MenuItem value={true}>NM</MenuItem>
                        <MenuItem value={true}>NY</MenuItem>
                        <MenuItem value={true}>NC</MenuItem>
                        <MenuItem value={true}>ND</MenuItem>
                        <MenuItem value={true}>OH</MenuItem>
                        <MenuItem value={true}>OK</MenuItem>
                        <MenuItem value={true}>OR</MenuItem>
                        <MenuItem value={true}>PA</MenuItem>
                        <MenuItem value={true}>RI</MenuItem>
                        <MenuItem value={true}>SC</MenuItem>
                        <MenuItem value={true}>SD</MenuItem>
                        <MenuItem value={true}>TN</MenuItem>
                        <MenuItem value={true}>TX</MenuItem>
                        <MenuItem value={true}>UT</MenuItem>
                        <MenuItem value={true}>VT</MenuItem>
                        <MenuItem value={true}>VA</MenuItem>
                        <MenuItem value={true}>WA</MenuItem>
                        <MenuItem value={true}>WV</MenuItem>
                        <MenuItem value={true}>WI</MenuItem>
                        <MenuItem value={true}>WY</MenuItem>
                      </Select>
                      <FormHelperText></FormHelperText>
                    </FormControl>
                  </GridItem>

                  <GridItem xs={12} sm={12} md={3} style={{ marginLeft: "11px", width:"133px" }}>
                    <CustomInput
                      labelText="Zip Code"
                      id="ZipCode-id"
                      formControlProps={{
                      }}
                      inputProps={{
                        name: "ZipCode",
                        className: classes3.textspacing4,
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={3} style={{ marginRight: "100px", marginLeft: "40px" }}>
                    <CustomInput
                      labelText="Email"
                      id="Email-id"
                      formControlProps={{
                      }}
                      inputProps={{
                        name: "Email",
                        className: classes3.textspacing,
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={3} style={{ marginRight: "100px",  }}>
                    <CustomInput
                      labelText="Phone Number"
                      id="PhoneNumber-id"
                      formControlProps={{
                      }}
                      inputProps={{
                        name: "PhoneNumber",
                        className: classes3.textspacing,
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <h1 className={classes1.subtitles_createAccount}>Account Information</h1>
                <GridContainer style={{ marginTop: "0px", }}>
                  <GridItem xs={12} sm={12} md={3} style={{ marginRight: "100px", marginLeft: "40px"  }}>
                  <CustomInput
                      labelText="Username"
                      id="Username-id"
                      formControlProps={{
                      }}
                      inputProps={{
                        name: "Username",
                        className: classes3.textspacing,
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={3} style={{ marginRight: "100px",  }}>
                  <CustomInput
                      labelText="Password"
                      id="Password-id"
                      formControlProps={{
                      }}
                      inputProps={{
                        name: "Password",
                        className: classes3.textspacing,
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={3} style={{ marginRight: "40px",  }}>
                  <CustomInput
                      labelText="Re-enter Password"
                      id="Re-enterPassword-id"
                      formControlProps={{
                      }}
                      inputProps={{
                        name: "Re-enter Password",
                        className: classes3.textspacing,
                      }}
                    />
                  </GridItem>

                </GridContainer>

              </div>
            </div>
          </div>
          <div className={classes5.root}>
                        <Button variant="contained" color="secondary" type="submit">Save and Confirm</Button>
                    </div>


        </div>
        <Footer />



        {/* <Form.Row>
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Form.Control
              required
              name="firstname"
              type="text"
              placeholder="First name"
              defaultValue="Mark"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              required
              name="lastname"
              type="text"
              placeholder="Last name"
              defaultValue="Otto"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustomUsername">
            <Form.Label>Username</Form.Label>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                name="username"
                type="text"
                placeholder="Username"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="City" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom04">
            <Form.Label>State</Form.Label>
            <Form.Control type="text" placeholder="State" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>Zip</Form.Label>
            <Form.Control type="text" placeholder="Zip" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid zip.
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Group>
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
          />
        </Form.Group>
        <Button type="submit">Sign Up</Button> */}
      </Form>


    </div>

  );
}