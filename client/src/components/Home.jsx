import React from 'react'; 
import Logo1 from "../images/Background_Blue.png"; 
import Timer from "./Timer"; 
import Logo2 from "../images/voting-banner.png"; 
import Logo3 from "../images/HomePage_RedBlue_Map.jpg";
import MenuItems from './MenuItems';



export default class Home extends React.Component 
{
    render(){
        const currDate = new Date(); 
        const yr = (currDate.getMonth() === 12 && currDate.getDate() > 5) ? currDate.getFullYear() + 4 : currDate.getFullYear(); 
    
        return (
            <div>
                <h1>Polls Close:</h1>
                <img className="backgroundImage" src={Logo1}></img>
                <h2>
                    <img className="votingBannerImage" src={Logo2}></img>
                </h2>
                <Timer date = {`${yr}-11-05T00:00:00`}></Timer>

                <div>
                    <div className="red_border"></div>
                    <div className="blue_border_1"></div>
                    <div className="blue_border_2"></div>
                </div>

                <div>
                    <p>Create an Account or <br></br>Login to Vote Today!</p>
                </div>

                <div>
                    <img className="HomePage_Map" src={Logo3}></img>
                </div>
                
            </div>
        );
    }
}
