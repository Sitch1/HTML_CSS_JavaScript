import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import "./AnimalsProfile.css";
import AnimalsProfileCard from './AnimalsProfileCard';
import { useEffect } from 'react';


const animalsInfo = [
    {
        Id: 1,
        Art: "Hund",
        Info: "Der Hund ist eines der ältesten Haustiere des Menschen und stammt ursprünglich vom Wolf ab. Seit über 15.000 Jahren leben Hunde an der Seite des Menschen – als Jäger, Wächter, Helfer und treue Gefährten. Heute gibt es weltweit über 340 anerkannte Hunderassen, ...",
        image: "https://www.zooroyal.at/magazin/wp-content/uploads/2017/02/bulldogge-hunderasse-760x560.jpg"
    },
    {
        Id: 2,
        Art: "Vogel",
        Info: "Der Wellensittich ist einer der beliebtesten Heimvögel weltweit und stammt ursprünglich aus den trockenen Regionen Australiens. In freier Wildbahn leben sie in großen Schwärmen und ...",
        image: "https://currumbinvetservices.com.au/wp-content/uploads/2023/02/budgerigars.jpg.webp"
    }
];




function AnimalsProfile() {
    useEffect(() => {
        document.body.style.backgroundImage = "url('https://currumbinvetservices.com.au/wp-content/uploads/2023/02/budgerigars.jpg.webp')";
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundPosition = 'center';
    }, []);

    const { id } = useParams();
    console.log(id);
    const navigate = useNavigate();

    const selectedAnimal = animalsInfo.find(
        animal => animal.Id.toString() === id
    );

    if (!selectedAnimal) {
        console.log("Tier nicht gefunden");
        return <p>🐾 Tier nicht gefunden</p>;
    }

    return (
        <div className="animalsProfile">
            <h1>Animals-Profile</h1>

            <div id='animalsProfileCard'>
                <AnimalsProfileCard
                    key={selectedAnimal.Id}
                    Id={selectedAnimal.Id}
                    image={selectedAnimal.image}
                    Art={selectedAnimal.Art}
                    Info={selectedAnimal.Info}
                />
            </div>

            <div id='animalsProfileBackButton'>
                <button onClick={() => navigate("/")}>BACK</button>
            </div>
        </div>
    );
}

export default AnimalsProfile;