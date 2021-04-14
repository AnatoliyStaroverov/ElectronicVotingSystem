import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { useAuth0 } from "@auth0/auth0-react";
import { makeStyles } from '@material-ui/core/styles';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import VoteSpec from "./VoteSpec.jsx";
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
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
    pos: {
        fontSize: 25,
      },

}));


export default function VoteForm() {
    const classes = useStyles();
    const { user, isAuthenticated } = useAuth0();

    return (
        <div>
        { isAuthenticated ? 
            <div>
              <Card className={classes.CardStyle}>
                <CardHeader
                    avatar={<Avatar aria-label="recipe" className={classes.avatar}></Avatar> }
                    title={ "Welcome "  + user.name}
                    subheader={user.email}
                    />
                     <Typography ml={3}  mt={3} className={classes.pos} color="textSecondary">
                        Cast Your Vote Here
                        </Typography>
                <VoteSpec />
                <CardContent className={classes.CardStyle}>
                </CardContent>

                <VoteSpec />
            </Card>
            </div>
          : <div> You are not logined with Auth0</div>
        }
        </div>
    );
}