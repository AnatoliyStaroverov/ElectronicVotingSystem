import React from 'react';
import USAMap from "react-usa-map";


const mapHandler = (event) => {
    alert(event.target.dataset.name);
};

const statesFilling = () => {
    return {
        "NJ": {
            fill: "navy",
            
        },
        "NY": {
            fill: "#CC0000"
        },
        "WA": {
            fill: "navy"
        },
        "TX": {
            fill: "#CC0000"
        },
        "CA": {
            fill: "navy"
        },
        "FL": {
            fill: "#CC0000"
        },
        "MT": {
            fill: "#CC0000",
            clickHandler: () => alert("Republican Votes: 343, 602 ; Democratic Votes: 244,786")

        }
    };
};


export default function VotingMap() {
    return (
        <div style={{display:"flex", justifyContent:"center",marginTop:"92px"}}className="VotingMap">
            <USAMap customize={statesFilling()} onClick={mapHandler} />
            
        </div>
    );

}


