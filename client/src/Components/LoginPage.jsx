import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const styles = {
    CardStyle: {
        width: "40%",
        marginLeft: "0px",
        marginRight: "0px",
        margin: "auto",
        marginTop: "140px",
        height: "400px",

    },
    root: {
        flexGrow: 1,
        display: "flex",
        justifyContent: 'center',
        marginTop: '20px',
    },
    LoginHeader:
    {
        display: "flex",
        justifyContent:"center",
        marginTop: "-112px",
        color: "red",

    },
    Username:
    {
        width: "468px",
        margin: "auto",
        marginLeft:"-122px",
        marginTop:"40px",
    },
    Password:
    {
        width: "468px",
        margin: "auto",
        marginLeft:"-122px",
        marginTop:"40px",
    },
    buttonStyle:
    {
        marginTop: "43px",
        width: "472px",
        marginLeft: "-120px",
    }

}
const useStyles = makeStyles(styles);


export default function LoginPage() {
    const classes = useStyles();
    return (
        <div>
            <Card style={{ marginLeft: "0px", marginRight: "0px", margin: 'auto', marginTop: "120px", }} className={classes.CardStyle}>
                <CardContent style={{ marginLeft: "0px", marginRight: "0px", margin: 'auto', marginTop: "140px", }} className={classes.CardStyle}>
                    <h2 className={classes.LoginHeader}>Login to Vote Today!</h2>
                    <TextField className={classes.Username} id="standard-basic" label="Username" />
                    <TextField className={classes.Password} id="standard-basic" label="Password" />
                    <Button className={classes.buttonStyle}variant="contained" color="secondary" type="submit">Login</Button>
                </CardContent>
            </Card>
        </div>
    );
}