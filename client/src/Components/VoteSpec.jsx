import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { Form } from 'react-bootstrap';
import axios from 'axios';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';



const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 190,
  },
  input1:
  {
    fontSize:"13pt",
    marginTop: "55px",
    marginLeft:"20px",
    fontWeight: 600,
  },
  input2:
  {
    fontSize:"13pt",
    marginTop: "-39px",
    marginLeft:"528px",
    fontWeight: 600,
  },
  input3:
  {
    fontSize:"13pt",
    marginTop: "15px",
    marginLeft:"528px",
    fontWeight: 600,
  },
  input4:
  {
    fontSize:"13pt",
    marginTop: "15px",
    marginLeft:"528px",
    fontWeight: 600,
  },
  stateInput:
  {
    width:"100px",
    marginLeft:"350px",
    marginTop:"-48px",
  },
  radioButtons1:
  {
    display:"flex",
    flexDirection:"row",
    marginLeft:"785px",
    marginTop:"-39px",
  },
  radioButtons2:
  {
    display:"flex",
    flexDirection:"row",
    marginLeft:"820px",
    marginTop:"-39px",
  },
  radioButtons3:
  {
    display:"flex",
    flexDirection:"row",
    marginLeft:"800px",
    marginTop:"-39px",
  },
  ButtonStyle:
  {
    display:"block",
    margin:'auto',
    top:"37px",
    width: "300px",
  }
}));

export default function VoteSpec() {
  const [val, setVal] = React.useState('');
  const [votingOption1, setVotingOption1] = React.useState('');
  const [votingOption2, setVotingOption2] = React.useState('');
  const [votingOption3, setVotingOption3] = React.useState('');

  const handleChange_DropDown = (event) => {
    setVal(event.target.value);
    
  };

  const handleChange_RadioButton1 = (event) => {
    setVotingOption1(event.target.value);
  }

  const handleChange_RadioButton2 = (event) => {
    setVotingOption2(event.target.value);
  }
  
  const handleChange_RadioButton3 = (event) => {
    setVotingOption3(event.target.value);
  }

  const classes = useStyles();

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
      <Form  onSubmit={handleSubmit}>
      <FormControl ml={5} className={classes.formControl}>
        <h1 className={classes.input1}>Select the state you currently reside in:</h1>
        <FormControl variant="outlined" className={classes.stateInput}>
        <InputLabel id="demo-simple-select-outlined-label">State</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={val}
          onChange={handleChange_DropDown}
          label="State"
        >
          <MenuItem value="AL">AL</MenuItem>
          <MenuItem value="AK">AK</MenuItem>
          <MenuItem value="AZ">AZ</MenuItem>
          <MenuItem value="AR">AR</MenuItem>
          <MenuItem value="CA">CA</MenuItem>
          <MenuItem value="CO">CO</MenuItem>
          <MenuItem value="CT">CT</MenuItem>
          <MenuItem value="DE">DE</MenuItem>
          <MenuItem value="FL">FL</MenuItem>
          <MenuItem value="GA">GA</MenuItem>
          <MenuItem value="HI">HI</MenuItem>
          <MenuItem value="ID">ID</MenuItem>
          <MenuItem value="IL">IL</MenuItem>
          <MenuItem value="IN">IN</MenuItem>
          <MenuItem value="IA">IA</MenuItem>
          <MenuItem value="KS">KS</MenuItem>
          <MenuItem value="KY">KY</MenuItem>
          <MenuItem value="LA">LA</MenuItem>
          <MenuItem value="ME">ME</MenuItem>
          <MenuItem value="MD">MD</MenuItem>
          <MenuItem value="MA">MA</MenuItem>
          <MenuItem value="MI">MI</MenuItem>
          <MenuItem value="MN">MN</MenuItem>
          <MenuItem value="MS">MS</MenuItem>
          <MenuItem value="MO">MO</MenuItem>
          <MenuItem value="MT">MT</MenuItem>
          <MenuItem value="NE">NE</MenuItem>
          <MenuItem value="NV">NV</MenuItem>
          <MenuItem value="NH">NH</MenuItem>
          <MenuItem value="NJ">NJ</MenuItem>
          <MenuItem value="NM">NM</MenuItem>
          <MenuItem value="NY">NY</MenuItem>
          <MenuItem value="NC">NC</MenuItem>
          <MenuItem value="ND">ND</MenuItem>
          <MenuItem value="OH">OH</MenuItem>
          <MenuItem value="OK">OK</MenuItem>
          <MenuItem value="OR">OR</MenuItem>
          <MenuItem value="PA">PA</MenuItem>
          <MenuItem value="RI">RI</MenuItem>
          <MenuItem value="SC">SC</MenuItem>
          <MenuItem value="SD">SD</MenuItem>
          <MenuItem value="TN">TN</MenuItem>
          <MenuItem value="TX">TX</MenuItem>
          <MenuItem value="UT">UT</MenuItem>
          <MenuItem value="VT">VT</MenuItem>
          <MenuItem value="VA">VA</MenuItem>
          <MenuItem value="WA">WA</MenuItem>
          <MenuItem value="WV">WV</MenuItem>
          <MenuItem value="WI">WI</MenuItem>
          <MenuItem value="WY">WY</MenuItem>
        </Select>
      </FormControl>

      <FormControl component="fieldset">
      <h1 className={classes.input2}>Select Presidential Candidate:</h1>
      <RadioGroup value={votingOption1} onChange={handleChange_RadioButton1} className={classes.radioButtons1}>
        <FormControlLabel value="President1" control={<Radio />} label="Donald J. Trump (R)" />
        <FormControlLabel value="President2" control={<Radio />} label="Joe Biden (D)" />
        <FormControlLabel value="President3" control={<Radio />} label="Howie Hawkins (G)" />
      </RadioGroup>
    </FormControl>


    <FormControl component="fieldset">
      <h1 className={classes.input3}>Select Vice Presidential Candidate:</h1>
      <RadioGroup value={votingOption2} onChange={handleChange_RadioButton2} className={classes.radioButtons2}>
        <FormControlLabel value="VPresident1" control={<Radio />} label="Mike Pence (R)" />
        <FormControlLabel value="VPresident2" control={<Radio />} label="Kamala Harris (D)" />
        <FormControlLabel value="VPresident3" control={<Radio />} label="Angela Walker (G)" />
      </RadioGroup>
    </FormControl>

    <FormControl component="fieldset">
      <h1 className={classes.input4}>Select Candidate for US Senator:</h1>
      <RadioGroup value={votingOption3} onChange={handleChange_RadioButton3} className={classes.radioButtons3}>
        <FormControlLabel value="US_Senator1" control={<Radio />} label="Tommy Tuberville (R)" />
        <FormControlLabel value="US_Senator2" control={<Radio />} label="Doug Jones (D)" />
      </RadioGroup>
    </FormControl>
        
      </FormControl>
         <Button  variant="contained" color="secondary" type="submit" className={classes.ButtonStyle}>Submit Vote</Button> 
      </Form>
    </div>
  );
}
