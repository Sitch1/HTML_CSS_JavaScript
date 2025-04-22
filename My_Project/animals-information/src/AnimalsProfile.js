import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./AnimalsProfile.css"


function AnimalsProfile() {
    const navigate = useNavigate();
    return (
        <div className="animalsProfileContainer" >
            <h1>Animals-Profile</h1>
            <div className="animalsProfileBackroundImg"></div>
            <div id='animalsProfileBackButton'>
                <button onClick={() => navigate("/")}>BACK</button>
            </div>
        </div>


    )
}

export default AnimalsProfile
