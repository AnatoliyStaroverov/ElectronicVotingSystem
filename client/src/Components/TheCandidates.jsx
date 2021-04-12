import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import GridContainer from "./GridContainer.jsx";
import GridItem from "./GridItem.jsx";


const styles = {
    CardStyle: {
        maxWidth: "90%",
        marginLeft: "0px",
        marginRight: "0px",
        margin: "auto",
        marginTop: "140px",
        height: "200px",

    },
    root: {
        flexGrow: 1,
        display: "flex",
        justifyContent: 'center',
        marginTop: '20px',
    },
    CardHeaders:
    {
        marginTop: "-75px",
    }
}

const useStyles = makeStyles(styles);




export default function TheCandidates() {
    const classes = useStyles();
    return (
        <div>
            <Card style={{ maxWidth: "90%", margin: "auto", marginTop: "97px", height:"280px" }}>
                <CardContent style={{ maxWidth: "90%", margin: "auto", marginTop: "97px" }} className={classes.CardStyle}>
                    <GridContainer style={{ marginTop: "0px", }}>
                        <h2 className={classes.CardHeaders}>Alabama</h2>
                        <GridItem xs={12} sm={12} md={3} style={{ marginRight: "138px", marginLeft: "-113px", marginTop:"-54px" }}>
                            <h2 style={{ fontWeight: "500", marginTop: "46px", fontSize: "13pt" }}>Presidential Candidates:</h2>
                            <h2 style={{ fontWeight: "400", fontSize: "13pt", color: "red" }}>Republican Party: Donald J. Trump</h2>
                            <h2 style={{ fontWeight: "400", fontSize: "13pt", color: "blue" }}>Democratic Party: Joe Biden</h2>
                            <h2 style={{ fontWeight: "400", fontSize: "13pt", color: "green" }}>Green Party: Howie Hawkins </h2>
                        </GridItem>

                        <GridItem xs={12} sm={12} md={3} style={{ marginTop: "-54px", marginRight:"134px" }}>
                        <h2 style={{ fontWeight: "500", marginTop: "46px", fontSize: "13pt" }}>Vice Presidential Candidates:</h2>
                            <h2 style={{ fontWeight: "400", fontSize: "13pt", color: "red" }}>Republican Party: Mike Pence</h2>
                            <h2 style={{ fontWeight: "400", fontSize: "13pt", color: "blue" }}>Democratic Party: Kamala Harris</h2>
                            <h2 style={{ fontWeight: "400", fontSize: "13pt", color: "green" }}>Green Party: Angela Nicole Walker </h2>
                        </GridItem>

                        <GridItem xs={12} sm={12} md={3} style={{ marginTop: "-54px", marginRight:"0px" }}>
                        <h2 style={{ fontWeight: "500", marginTop: "46px", fontSize: "13pt", width:"300px" }}>United States Senator Candidates:</h2>
                            <h2 style={{ fontWeight: "400", fontSize: "13pt", color: "red", width:"300px" }}>Republican Party: Tommy Tuberville</h2>
                            <h2 style={{ fontWeight: "400", fontSize: "13pt", color: "blue", width:"300px" }}>Democratic Party: Doug Jones</h2>
                        </GridItem>
                    </GridContainer>
                </CardContent>
            </Card>

            <Card style={{ maxWidth: "90%", margin: "auto", marginTop: "97px", height:"280px" }}>
                <CardContent style={{ maxWidth: "90%", margin: "auto", marginTop: "97px" }} className={classes.CardStyle}>
                    <GridContainer style={{ marginTop: "0px", }}>
                        <h2 className={classes.CardHeaders}>Alaska</h2>
                        <GridItem xs={12} sm={12} md={3} style={{ marginRight: "138px", marginLeft: "-88px", marginTop:"-54px" }}>
                            <h2 style={{ fontWeight: "500", marginTop: "46px", fontSize: "13pt" }}>Presidential Candidates:</h2>
                            <h2 style={{ fontWeight: "400", fontSize: "13pt", color: "red" }}>Republican Party: Donald J. Trump</h2>
                            <h2 style={{ fontWeight: "400", fontSize: "13pt", color: "blue" }}>Democratic Party: Joe Biden</h2>
                            <h2 style={{ fontWeight: "400", fontSize: "13pt", color: "green" }}>Green Party: Howie Hawkins </h2>
                        </GridItem>

                        <GridItem xs={12} sm={12} md={3} style={{ marginTop: "-54px", marginRight:"134px" }}>
                        <h2 style={{ fontWeight: "500", marginTop: "46px", fontSize: "13pt" }}>Vice Presidential Candidates:</h2>
                            <h2 style={{ fontWeight: "400", fontSize: "13pt", color: "red" }}>Republican Party: Mike Pence</h2>
                            <h2 style={{ fontWeight: "400", fontSize: "13pt", color: "blue" }}>Democratic Party: Kamala Harris</h2>
                            <h2 style={{ fontWeight: "400", fontSize: "13pt", color: "green" }}>Green Party: Angela Nicole Walker </h2>
                        </GridItem>

                        <GridItem xs={12} sm={12} md={3} style={{ marginTop: "-54px", marginRight:"0px" }}>
                        <h2 style={{ fontWeight: "500", marginTop: "46px", fontSize: "13pt", width:"300px" }}>United States Senator Candidates:</h2>
                            <h2 style={{ fontWeight: "400", fontSize: "13pt", color: "red", width:"300px" }}>Republican Party: Tommy Tuberville</h2>
                            <h2 style={{ fontWeight: "400", fontSize: "13pt", color: "blue", width:"300px" }}>Democratic Party: Doug Jones</h2>
                        </GridItem>
                    </GridContainer>
                </CardContent>
            </Card>

            <Card style={{ maxWidth: "90%", margin: "auto", marginTop: "97px", height:"280px" }}>
                <CardContent style={{ maxWidth: "90%", margin: "auto", marginTop: "97px" }} className={classes.CardStyle}>
                    <GridContainer style={{ marginTop: "0px", }}>
                        <h2 className={classes.CardHeaders}>Arizona</h2>
                        <GridItem xs={12} sm={12} md={3} style={{ marginRight: "138px", marginLeft: "-100px", marginTop:"-54px" }}>
                            <h2 style={{ fontWeight: "500", marginTop: "46px", fontSize: "13pt" }}>Presidential Candidates:</h2>
                            <h2 style={{ fontWeight: "400", fontSize: "13pt", color: "red" }}>Republican Party: Donald J. Trump</h2>
                            <h2 style={{ fontWeight: "400", fontSize: "13pt", color: "blue" }}>Democratic Party: Joe Biden</h2>
                            <h2 style={{ fontWeight: "400", fontSize: "13pt", color: "green" }}>Green Party: Howie Hawkins </h2>
                        </GridItem>

                        <GridItem xs={12} sm={12} md={3} style={{ marginTop: "-54px", marginRight:"134px" }}>
                        <h2 style={{ fontWeight: "500", marginTop: "46px", fontSize: "13pt" }}>Vice Presidential Candidates:</h2>
                            <h2 style={{ fontWeight: "400", fontSize: "13pt", color: "red" }}>Republican Party: Mike Pence</h2>
                            <h2 style={{ fontWeight: "400", fontSize: "13pt", color: "blue" }}>Democratic Party: Kamala Harris</h2>
                            <h2 style={{ fontWeight: "400", fontSize: "13pt", color: "green" }}>Green Party: Angela Nicole Walker </h2>
                        </GridItem>

                        <GridItem xs={12} sm={12} md={3} style={{ marginTop: "-54px", marginRight:"0px" }}>
                        <h2 style={{ fontWeight: "500", marginTop: "46px", fontSize: "13pt", width:"300px" }}>United States Senator Candidates:</h2>
                            <h2 style={{ fontWeight: "400", fontSize: "13pt", color: "red", width:"300px" }}>Republican Party: Tommy Tuberville</h2>
                            <h2 style={{ fontWeight: "400", fontSize: "13pt", color: "blue", width:"300px" }}>Democratic Party: Doug Jones</h2>
                        </GridItem>
                    </GridContainer>
                </CardContent>
            </Card>

            <Card style={{ maxWidth: "90%", margin: "auto", marginTop: "97px", height:"280px" }}>
                <CardContent style={{ maxWidth: "90%", margin: "auto", marginTop: "97px" }} className={classes.CardStyle}>
                    <GridContainer style={{ marginTop: "0px", }}>
                        <h2 className={classes.CardHeaders}>Arkansas</h2>
                        <GridItem xs={12} sm={12} md={3} style={{ marginRight: "138px", marginLeft: "-115px", marginTop:"-54px" }}>
                            <h2 style={{ fontWeight: "500", marginTop: "46px", fontSize: "13pt" }}>Presidential Candidates:</h2>
                            <h2 style={{ fontWeight: "400", fontSize: "13pt", color: "red" }}>Republican Party: Donald J. Trump</h2>
                            <h2 style={{ fontWeight: "400", fontSize: "13pt", color: "blue" }}>Democratic Party: Joe Biden</h2>
                            <h2 style={{ fontWeight: "400", fontSize: "13pt", color: "green" }}>Green Party: Howie Hawkins </h2>
                        </GridItem>

                        <GridItem xs={12} sm={12} md={3} style={{ marginTop: "-54px", marginRight:"134px" }}>
                        <h2 style={{ fontWeight: "500", marginTop: "46px", fontSize: "13pt" }}>Vice Presidential Candidates:</h2>
                            <h2 style={{ fontWeight: "400", fontSize: "13pt", color: "red" }}>Republican Party: Mike Pence</h2>
                            <h2 style={{ fontWeight: "400", fontSize: "13pt", color: "blue" }}>Democratic Party: Kamala Harris</h2>
                            <h2 style={{ fontWeight: "400", fontSize: "13pt", color: "green" }}>Green Party: Angela Nicole Walker </h2>
                        </GridItem>

                        <GridItem xs={12} sm={12} md={3} style={{ marginTop: "-54px", marginRight:"0px" }}>
                        <h2 style={{ fontWeight: "500", marginTop: "46px", fontSize: "13pt", width:"300px" }}>United States Senator Candidates:</h2>
                            <h2 style={{ fontWeight: "400", fontSize: "13pt", color: "red", width:"300px" }}>Republican Party: Tommy Tuberville</h2>
                            <h2 style={{ fontWeight: "400", fontSize: "13pt", color: "blue", width:"300px" }}>Democratic Party: Doug Jones</h2>
                        </GridItem>
                    </GridContainer>
                </CardContent>
            </Card>

            <Card style={{ maxWidth: "90%", margin: "auto", marginTop: "97px", height:"280px" }}>
                <CardContent style={{ maxWidth: "90%", margin: "auto", marginTop: "97px" }} className={classes.CardStyle}>
                    <GridContainer style={{ marginTop: "0px", }}>
                        <h2 className={classes.CardHeaders}>California</h2>
                        <GridItem xs={12} sm={12} md={3} style={{ marginRight: "138px", marginLeft: "-115px", marginTop:"-54px" }}>
                            <h2 style={{ fontWeight: "500", marginTop: "46px", fontSize: "13pt" }}>Presidential Candidates:</h2>
                            <h2 style={{ fontWeight: "400", fontSize: "13pt", color: "red" }}>Republican Party: Donald J. Trump</h2>
                            <h2 style={{ fontWeight: "400", fontSize: "13pt", color: "blue" }}>Democratic Party: Joe Biden</h2>
                            <h2 style={{ fontWeight: "400", fontSize: "13pt", color: "green" }}>Green Party: Howie Hawkins </h2>
                        </GridItem>

                        <GridItem xs={12} sm={12} md={3} style={{ marginTop: "-54px", marginRight:"134px" }}>
                        <h2 style={{ fontWeight: "500", marginTop: "46px", fontSize: "13pt" }}>Vice Presidential Candidates:</h2>
                            <h2 style={{ fontWeight: "400", fontSize: "13pt", color: "red" }}>Republican Party: Mike Pence</h2>
                            <h2 style={{ fontWeight: "400", fontSize: "13pt", color: "blue" }}>Democratic Party: Kamala Harris</h2>
                            <h2 style={{ fontWeight: "400", fontSize: "13pt", color: "green" }}>Green Party: Angela Nicole Walker </h2>
                        </GridItem>

                        <GridItem xs={12} sm={12} md={3} style={{ marginTop: "-54px", marginRight:"0px" }}>
                        <h2 style={{ fontWeight: "500", marginTop: "46px", fontSize: "13pt", width:"300px" }}>United States Senator Candidates:</h2>
                            <h2 style={{ fontWeight: "400", fontSize: "13pt", color: "red", width:"300px" }}>Republican Party: Tommy Tuberville</h2>
                            <h2 style={{ fontWeight: "400", fontSize: "13pt", color: "blue", width:"300px" }}>Democratic Party: Doug Jones</h2>
                        </GridItem>
                    </GridContainer>
                </CardContent>
            </Card>


            <Card style={{ maxWidth: "90%", margin: "auto", marginTop: "97px", height:"280px" }}>
                <CardContent style={{ maxWidth: "90%", margin: "auto", marginTop: "97px" }} className={classes.CardStyle}>
                    <GridContainer style={{ marginTop: "0px", }}>
                        <h2 className={classes.CardHeaders}>Colorado</h2>
                        <GridItem xs={12} sm={12} md={3} style={{ marginRight: "138px", marginLeft: "-115px", marginTop:"-54px" }}>
                            <h2 style={{ fontWeight: "500", marginTop: "46px", fontSize: "13pt" }}>Presidential Candidates:</h2>
                            <h2 style={{ fontWeight: "400", fontSize: "13pt", color: "red" }}>Republican Party: Donald J. Trump</h2>
                            <h2 style={{ fontWeight: "400", fontSize: "13pt", color: "blue" }}>Democratic Party: Joe Biden</h2>
                            <h2 style={{ fontWeight: "400", fontSize: "13pt", color: "green" }}>Green Party: Howie Hawkins </h2>
                        </GridItem>

                        <GridItem xs={12} sm={12} md={3} style={{ marginTop: "-54px", marginRight:"134px" }}>
                        <h2 style={{ fontWeight: "500", marginTop: "46px", fontSize: "13pt" }}>Vice Presidential Candidates:</h2>
                            <h2 style={{ fontWeight: "400", fontSize: "13pt", color: "red" }}>Republican Party: Mike Pence</h2>
                            <h2 style={{ fontWeight: "400", fontSize: "13pt", color: "blue" }}>Democratic Party: Kamala Harris</h2>
                            <h2 style={{ fontWeight: "400", fontSize: "13pt", color: "green" }}>Green Party: Angela Nicole Walker </h2>
                        </GridItem>

                        <GridItem xs={12} sm={12} md={3} style={{ marginTop: "-54px", marginRight:"0px" }}>
                        <h2 style={{ fontWeight: "500", marginTop: "46px", fontSize: "13pt", width:"300px" }}>United States Senator Candidates:</h2>
                            <h2 style={{ fontWeight: "400", fontSize: "13pt", color: "red", width:"300px" }}>Republican Party: Tommy Tuberville</h2>
                            <h2 style={{ fontWeight: "400", fontSize: "13pt", color: "blue", width:"300px" }}>Democratic Party: Doug Jones</h2>
                        </GridItem>
                    </GridContainer>
                </CardContent>
            </Card>


            <Card style={{ maxWidth: "90%", margin: "auto", marginTop: "97px", height:"280px" }}>
                <CardContent style={{ maxWidth: "90%", margin: "auto", marginTop: "97px" }} className={classes.CardStyle}>
                    <GridContainer style={{ marginTop: "0px", }}>
                        <h2 className={classes.CardHeaders}>Connecticut</h2>
                        <GridItem xs={12} sm={12} md={3} style={{ marginRight: "138px", marginLeft: "-144px", marginTop:"-54px" }}>
                            <h2 style={{ fontWeight: "500", marginTop: "46px", fontSize: "13pt" }}>Presidential Candidates:</h2>
                            <h2 style={{ fontWeight: "400", fontSize: "13pt", color: "red" }}>Republican Party: Donald J. Trump</h2>
                            <h2 style={{ fontWeight: "400", fontSize: "13pt", color: "blue" }}>Democratic Party: Joe Biden</h2>
                            <h2 style={{ fontWeight: "400", fontSize: "13pt", color: "green" }}>Green Party: Howie Hawkins </h2>
                        </GridItem>

                        <GridItem xs={12} sm={12} md={3} style={{ marginTop: "-54px", marginRight:"134px" }}>
                        <h2 style={{ fontWeight: "500", marginTop: "46px", fontSize: "13pt" }}>Vice Presidential Candidates:</h2>
                            <h2 style={{ fontWeight: "400", fontSize: "13pt", color: "red" }}>Republican Party: Mike Pence</h2>
                            <h2 style={{ fontWeight: "400", fontSize: "13pt", color: "blue" }}>Democratic Party: Kamala Harris</h2>
                            <h2 style={{ fontWeight: "400", fontSize: "13pt", color: "green" }}>Green Party: Angela Nicole Walker </h2>
                        </GridItem>

                        <GridItem xs={12} sm={12} md={3} style={{ marginTop: "-54px", marginRight:"0px" }}>
                        <h2 style={{ fontWeight: "500", marginTop: "46px", fontSize: "13pt", width:"300px" }}>United States Senator Candidates:</h2>
                            <h2 style={{ fontWeight: "400", fontSize: "13pt", color: "red", width:"300px" }}>Republican Party: Tommy Tuberville</h2>
                            <h2 style={{ fontWeight: "400", fontSize: "13pt", color: "blue", width:"300px" }}>Democratic Party: Doug Jones</h2>
                        </GridItem>
                    </GridContainer>
                </CardContent>
            </Card>

            <Card style={{ maxWidth: "90%", margin: "auto", marginTop: "97px", height:"280px" }}>
                <CardContent style={{ maxWidth: "90%", margin: "auto", marginTop: "97px" }} className={classes.CardStyle}>
                    <GridContainer style={{ marginTop: "0px", }}>
                        <h2 className={classes.CardHeaders}>Delaware</h2>
                        <GridItem xs={12} sm={12} md={3} style={{ marginRight: "138px", marginLeft: "-115px", marginTop:"-54px" }}>
                            <h2 style={{ fontWeight: "500", marginTop: "46px", fontSize: "13pt" }}>Presidential Candidates:</h2>
                            <h2 style={{ fontWeight: "400", fontSize: "13pt", color: "red" }}>Republican Party: Donald J. Trump</h2>
                            <h2 style={{ fontWeight: "400", fontSize: "13pt", color: "blue" }}>Democratic Party: Joe Biden</h2>
                            <h2 style={{ fontWeight: "400", fontSize: "13pt", color: "green" }}>Green Party: Howie Hawkins </h2>
                        </GridItem>

                        <GridItem xs={12} sm={12} md={3} style={{ marginTop: "-54px", marginRight:"134px" }}>
                        <h2 style={{ fontWeight: "500", marginTop: "46px", fontSize: "13pt" }}>Vice Presidential Candidates:</h2>
                            <h2 style={{ fontWeight: "400", fontSize: "13pt", color: "red" }}>Republican Party: Mike Pence</h2>
                            <h2 style={{ fontWeight: "400", fontSize: "13pt", color: "blue" }}>Democratic Party: Kamala Harris</h2>
                            <h2 style={{ fontWeight: "400", fontSize: "13pt", color: "green" }}>Green Party: Angela Nicole Walker </h2>
                        </GridItem>

                        <GridItem xs={12} sm={12} md={3} style={{ marginTop: "-54px", marginRight:"0px" }}>
                        <h2 style={{ fontWeight: "500", marginTop: "46px", fontSize: "13pt", width:"300px" }}>United States Senator Candidates:</h2>
                            <h2 style={{ fontWeight: "400", fontSize: "13pt", color: "red", width:"300px" }}>Republican Party: Tommy Tuberville</h2>
                            <h2 style={{ fontWeight: "400", fontSize: "13pt", color: "blue", width:"300px" }}>Democratic Party: Doug Jones</h2>
                        </GridItem>
                    </GridContainer>
                </CardContent>
            </Card>


            <Card style={{ maxWidth: "90%", margin: "auto", marginTop: "97px", height:"280px" }}>
                <CardContent style={{ maxWidth: "90%", margin: "auto", marginTop: "97px" }} className={classes.CardStyle}>
                    <GridContainer style={{ marginTop: "0px", }}>
                        <h2 className={classes.CardHeaders}>Florida</h2>
                        <GridItem xs={12} sm={12} md={3} style={{ marginRight: "138px", marginLeft: "-90px", marginTop:"-54px" }}>
                            <h2 style={{ fontWeight: "500", marginTop: "46px", fontSize: "13pt" }}>Presidential Candidates:</h2>
                            <h2 style={{ fontWeight: "400", fontSize: "13pt", color: "red" }}>Republican Party: Donald J. Trump</h2>
                            <h2 style={{ fontWeight: "400", fontSize: "13pt", color: "blue" }}>Democratic Party: Joe Biden</h2>
                            <h2 style={{ fontWeight: "400", fontSize: "13pt", color: "green" }}>Green Party: Howie Hawkins </h2>
                        </GridItem>

                        <GridItem xs={12} sm={12} md={3} style={{ marginTop: "-54px", marginRight:"134px" }}>
                        <h2 style={{ fontWeight: "500", marginTop: "46px", fontSize: "13pt" }}>Vice Presidential Candidates:</h2>
                            <h2 style={{ fontWeight: "400", fontSize: "13pt", color: "red" }}>Republican Party: Mike Pence</h2>
                            <h2 style={{ fontWeight: "400", fontSize: "13pt", color: "blue" }}>Democratic Party: Kamala Harris</h2>
                            <h2 style={{ fontWeight: "400", fontSize: "13pt", color: "green" }}>Green Party: Angela Nicole Walker </h2>
                        </GridItem>

                        <GridItem xs={12} sm={12} md={3} style={{ marginTop: "-54px", marginRight:"0px" }}>
                        <h2 style={{ fontWeight: "500", marginTop: "46px", fontSize: "13pt", width:"300px" }}>United States Senator Candidates:</h2>
                            <h2 style={{ fontWeight: "400", fontSize: "13pt", color: "red", width:"300px" }}>Republican Party: Tommy Tuberville</h2>
                            <h2 style={{ fontWeight: "400", fontSize: "13pt", color: "blue", width:"300px" }}>Democratic Party: Doug Jones</h2>
                        </GridItem>
                    </GridContainer>
                </CardContent>
            </Card>


            <Card style={{ maxWidth: "90%", margin: "auto", marginTop: "97px", height:"280px" }}>
                <CardContent style={{ maxWidth: "90%", margin: "auto", marginTop: "97px" }} className={classes.CardStyle}>
                    <GridContainer style={{ marginTop: "0px", }}>
                        <h2 className={classes.CardHeaders}>Georgia</h2>
                        <GridItem xs={12} sm={12} md={3} style={{ marginRight: "138px", marginLeft: "-98px", marginTop:"-54px" }}>
                            <h2 style={{ fontWeight: "500", marginTop: "46px", fontSize: "13pt" }}>Presidential Candidates:</h2>
                            <h2 style={{ fontWeight: "400", fontSize: "13pt", color: "red" }}>Republican Party: Donald J. Trump</h2>
                            <h2 style={{ fontWeight: "400", fontSize: "13pt", color: "blue" }}>Democratic Party: Joe Biden</h2>
                            <h2 style={{ fontWeight: "400", fontSize: "13pt", color: "green" }}>Green Party: Howie Hawkins </h2>
                        </GridItem>

                        <GridItem xs={12} sm={12} md={3} style={{ marginTop: "-54px", marginRight:"134px" }}>
                        <h2 style={{ fontWeight: "500", marginTop: "46px", fontSize: "13pt" }}>Vice Presidential Candidates:</h2>
                            <h2 style={{ fontWeight: "400", fontSize: "13pt", color: "red" }}>Republican Party: Mike Pence</h2>
                            <h2 style={{ fontWeight: "400", fontSize: "13pt", color: "blue" }}>Democratic Party: Kamala Harris</h2>
                            <h2 style={{ fontWeight: "400", fontSize: "13pt", color: "green" }}>Green Party: Angela Nicole Walker </h2>
                        </GridItem>

                        <GridItem xs={12} sm={12} md={3} style={{ marginTop: "-54px", marginRight:"0px" }}>
                        <h2 style={{ fontWeight: "500", marginTop: "46px", fontSize: "13pt", width:"300px" }}>United States Senator Candidates:</h2>
                            <h2 style={{ fontWeight: "400", fontSize: "13pt", color: "red", width:"300px" }}>Republican Party: Tommy Tuberville</h2>
                            <h2 style={{ fontWeight: "400", fontSize: "13pt", color: "blue", width:"300px" }}>Democratic Party: Doug Jones</h2>
                        </GridItem>
                    </GridContainer>
                </CardContent>
            </Card>
        </div>
    );

}