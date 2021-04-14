import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import GridContainer from "./GridContainer.jsx";
import GridItem from "./GridItem.jsx";
import React, { useState } from 'react';
import DatePicker from '@material-ui/lab/DatePicker';
import { Form, } from 'react-bootstrap';
import 'date-fns';
import axios from 'axios';


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
    CardStyle: {
        //minWidth: 275,
        //height: '200px',
        height: '850px',
        marginLeft: '3%',
        marginRight: '3%',
        marginTop: '48px',
    },
    root: {
        flexGrow: 1,
        display: "flex",
        justifyContent: 'center',
        marginTop: '20px',
    },
    subtitles_createAccount:
    {
        fontSize: "14pt",
        textAlign: "left",
        marginLeft: "40px",
        marginTop: "74px",
        fontWeight: "600",
    },
    subHeading:
    {
        margin: "auto",
        display: "flex",
        justifyContent: "center",
        padding: "19px",
    },
    formControl:
    {
        minWidth: 120,
    }
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


const useStyles3 = makeStyles(styles3);

export default function CreateAccount(props) {
    const classes3 = useStyles3();
    const classes4 = useStyles4();
    const classes5 = useStyles5();

    const [validated, setValidated] = useState(false);
    const [DDvalue, setDropDownValue] = React.useState('');
    const [value, setValue] = React.useState(null);


    const handleChange = (event) => {
      setDropDownValue(event.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
       
        const clientBody = {
            firstname:form.firstname.value,
            lastname: form.lastname.value,
            username:form.username.value,
            City:  form.City.value,
            State:form.State.value,
            ZipCode: form.zipcode.value
        };
        console.log(clientBody);

        axios.post('http://localhost:4000/newVoteSecure/Register', clientBody )
            .then(res => console.log(res.data));
    }

    return (
        <div>
            <Card className={classes3.CardStyle}>
                <CardContent className={classes3.CardStyle}>
                    <h2 className={classes3.subHeading}>Please Complete the Form Below to Create Your Account:</h2>
                    <h2 className={classes3.subtitles_createAccount}>Required Information:</h2>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <GridContainer style={{ marginTop: "0px", }}>
                            <GridItem xs={12} sm={12} md={3} style={{ marginRight: "100px", marginLeft: "40px" }}>
                                <TextField style={{ width: "348px" }} 
                                id="standard-basic"
                                 label="First Legal Name" 
                                 name="firstname"/>
                            </GridItem>

                            <GridItem xs={12} sm={12} md={3} style={{ marginRight: "100px" }}>
                                <TextField style={{ width: "348px" }} id="standard-basic" label="Last Name" 
                                 name="lastname"/>
                            </GridItem>

                            <GridItem xs={12} sm={12} md={3} style={{ marginTop: "0px" }}>
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <DatePicker
                                        label="Date of Birth"
                                        value={value}
                                        onChange={(newValue) => {
                                            setValue(newValue);
                                        }}
                                        renderInput={(params) => <TextField {...params} />}
                                    />
                                </LocalizationProvider>
                            </GridItem>

                        </GridContainer>
                        <h1 className={classes3.subtitles_createAccount}>Address and Contact Information</h1>
                        <GridContainer style={{ marginTop: "0px", }}>
                            <GridItem xs={12} sm={12} md={3} style={{ marginRight: "100px", marginLeft: "40px" }}>
                                <TextField style={{ width: "348px" }} id="standard-basic" label="Street Address" />
                            </GridItem>

                            <GridItem xs={12} sm={12} md={3} style={{ marginRight: "40px" }}>
                                <TextField style={{ width: "250px" }} id="standard-basic" label="City" name="City" />
                            </GridItem>

                            <GridItem xs={12} sm={12} md={3} style={{ marginLeft: "-32px", width: "142px" }}>
                                <FormControl variant="outlined" className={classes3.formControl}>
                                    <InputLabel id="demo-simple-select-outlined-label">State</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-outlined-label"
                                        id="demo-simple-select-outlined"
                                        value={DDvalue}
                                        onChange={handleChange}
                                        label="State"
                                        name="State"
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
                                </FormControl>
                            </GridItem>

                            <GridItem xs={12} sm={12} md={3} style={{ marginLeft: "11px", width: "133px" }}>
                            <TextField style={{ width: "150px", marginLeft: "27px", }} id="standard-basic" label="Zip Code"
                             name="zipcode" />
                            </GridItem>
                            
                            <GridItem xs={12} sm={12} md={3} style={{ marginRight: "100px", marginLeft: "40px" }}>
                            <TextField style={{ width: "348px", marginTop: "30px" }} id="standard-basic" label="Email" />
                            </GridItem>

                            <GridItem xs={12} sm={12} md={3} style={{ marginRight: "100px"}}>
                            <TextField style={{ width: "348px", marginTop: "30px" }} id="standard-basic" label="Phone Number" />
                            </GridItem>
                        </GridContainer>

                        <h1 className={classes3.subtitles_createAccount}>Account Information</h1>
                        <GridContainer style={{ marginTop: "0px", }}>
                            <GridItem xs={12} sm={12} md={3} style={{ marginRight: "100px", marginLeft: "40px" }}>
                            <TextField style={{ width: "348px" }} id="standard-basic" label="Username" name="username" />
                            </GridItem>
                            
                            <GridItem xs={12} sm={12} md={3} style={{ marginRight: "100px", }}>
                            <TextField style={{ width: "348px"}} id="standard-basic" label="Password" />
                            </GridItem>

                            <GridItem xs={12} sm={12} md={3} style={{ marginRight: "40px", }}>
                            <TextField style={{ width: "348px"}} id="standard-basic" label="Re-enter Password" />
                            </GridItem>

                        </GridContainer>
                        <div className={classes5.root}>
                            <Button variant="contained" color="secondary" type="submit">Save and Confirm</Button>
                        </div>
                    </Form>
                </CardContent>
            </Card>
        </div>

    );

}