import { useNavigate } from 'react-router-dom';

import "./AnimalCard.css";

function AnimalCard(props) {
    const navigate = useNavigate();
    return (
        <div className="animal-info">
            <img width="300" src={props.image} alt={props.Name}></img>
            <h2>{props.Name}</h2>
            <h2>Art: {props.Art}</h2>
            <button id="learnMoreButton"
                onClick={() => navigate("/AnimalsProfile")}>LEARN MORE</button>

        </div>
    )
}

export default AnimalCard