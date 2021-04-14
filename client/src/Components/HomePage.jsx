import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Timer from './Timer.jsx';
import VotingBanner from "../Images/voting-banner.png";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import statesImg from "../Images/HomePage_RedBlue_Map.jpg";
import { useAuth0 } from "@auth0/auth0-react";
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: "flex",
        justifyContent: 'center',
        marginTop: '20px',
    },
    title: {
        flexGrow: 1,
    },
    smallTitle:
    {
        color: 'white',
        fontWeight: 400,
        display: 'flex',
        justifyContent: 'center',
        marginTop: '4%',
    },
    TimerStyle:
    {
        display: 'flex',
        color: 'white',
        justifyContent: 'center',
        fontSize: "30pt",
        marginTop: "3%",

    },
    votingBanner:
    {
        height: "148px",
        display: 'flex',
        justifyContent: 'center',
        marginRight: "auto",
        marginLeft: 'auto',
        marginTop: "50px",
    },
    CardStyle: {
        //minWidth: 275,
        //marginTop: '65px',
        //height: '200px',
        height: '350px',
        marginLeft: '3%',
        marginRight: '3%',
        marginTop: '48px',
    },
    title2: {
        marginLeft: '167px',
        fontWeight: '300',
        fontSize: '31pt',
        marginTop: '10px',
    },
    statesImg:
    {
        width: "390px",
        float: "right",
        marginTop: "-206px",
        marginRight: "217px",
    },

}));

export default function HomePage() {
    const classes = useStyles();
    const currDate = new Date();
    const { user, isAuthenticated, isLoading } = useAuth0();
    const yr = (currDate.getMonth() === 12 && currDate.getDate() > 5) ? currDate.getFullYear() + 4 : currDate.getFullYear();

    return (
        <div>
        { isAuthenticated && (
            <div>
              <img src={user.picture} alt={user.name} />
              <h2>{user.name}</h2>
              <p>{user.email}</p>
            </div>
          )}
        
            
            <h2 className={classes.smallTitle}>Polls Close:</h2>
            <h1 className={classes.TimerStyle}><Timer date={`${yr}-11-05T00:00:00`}></Timer></h1>
            <h3><img className={classes.votingBanner} src={VotingBanner}></img></h3>

            <Card className={classes.CardStyle}>
                <CardContent className={classes.CardStyle}>
                    <h2 className={classes.title2}>Create an Account or</h2>
                    <h2 className={classes.title2}>Login to Vote Today!</h2>
                   
       
                    <h2><img src={statesImg} className={classes.statesImg}></img></h2>
                </CardContent>
            </Card>
        </div>

    );
}


