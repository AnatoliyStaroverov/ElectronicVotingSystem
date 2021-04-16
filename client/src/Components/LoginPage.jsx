import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useAuth0 } from "@auth0/auth0-react";

const useStyles = makeStyles({
  root: {
    //minWidth: 1000,
    display:'flex',
    justifyContent:'center',
    marginTop: "79px",
    height: "236px",
    width: "604px",
   
  },

  title: {
    fontSize: "16pt",
    display: "flex",
    justifyContent:"center",
    marginTop: "17px",
  },
  pos: {
    display: "flex",
    justifyContent: "center",
    marginTop: "14px"
  },
  smallerText:
  {
    marginTop: "14px",
    display:"flex",
    justifyContent:"center",
  },
  buttonStyle:
  {
    marginTop:"14px",
    display: "flex",
    justifyContent:"center",
  }
});

export default function LoginPage() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();

  return (
    <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '100vh'  }}
        >
    <Grid item xs={12}>
    <Card className={classes.root} >
      <CardContent>
        <Typography variant="h5" component="h2" className={classes.title}>
          Login or Register to Vote
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Login through our secure Auth0 Provider
        </Typography>
        <Typography variant="body2" component="p" className={classes.smallerText}>
          Once a new account is created, an email will be sent to you to verifiy your account.
          <br />
        
        </Typography>
      
      <CardActions>
         <Button 
         className={classes.buttonStyle}
         fullWidth
         variant="outlined" 
         color="primary" 
         onClick={() => loginWithRedirect()}
         > Auth0 Log In
         </Button>
      </CardActions>
      </CardContent>
    </Card>
    </Grid>
    </Grid>
   
  );
}
