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

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 190,
  },
}));

export default function VoteSpec() {
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
        <InputLabel htmlFor="grouped-native-select">State</InputLabel>
        <Select native defaultValue="" id="grouped-native-select">
          <option aria-label="None" value="" />
          <optgroup label="Category 1">
            <option value={1}>Option 1</option>
            <option value={2}>Option 2</option>
          </optgroup>
          <optgroup label="Category 2">
            <option value={3}>Option 3</option>
            <option value={4}>Option 4</option>
          </optgroup>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-select">Select Candidate</InputLabel>
        <Select defaultValue="" id="grouped-select">
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <ListSubheader>Category 1</ListSubheader>
          <MenuItem value={1}>Option 1</MenuItem>
          <MenuItem value={2}>Option 2</MenuItem>
          <ListSubheader>Category 2</ListSubheader>
          <MenuItem value={3}>Option 3</MenuItem>
          <MenuItem value={4}>Option 4</MenuItem>
        </Select>
        
      </FormControl>
         <Button  variant="contained" color="secondary" type="submit"> Vote</Button>
      </Form>
    </div>
  );
}
