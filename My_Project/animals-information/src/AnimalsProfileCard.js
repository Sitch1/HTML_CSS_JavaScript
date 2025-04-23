import React from 'react'

function AnimalsProfileCard(props) {
    return (
        <div id='animalsProfileCard'>
            <div id='animalsProfileCardContainerImg'>
                <img width={400} src={props.image} alt={props.Name}></img>
            </div>

            <div id='anmimalsProfileCardContainerName'>
                <h2>{props.Art}</h2>
            </div>

            <div id='animalsProfileCardContainerInfo'>
                <p>{props.Info}</p>
            </div>

        </div>
    )
}

export default AnimalsProfileCard
