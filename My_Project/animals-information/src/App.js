
import './App.css';
import AnimalCard from './AnimalCard';


function App() {
    // const [anzahl, setAnzahl] = useState(1);
    const animals = [
        { Id: 1, Name: "BullDoge", Art: "Hund", image: "https://www.zooroyal.at/magazin/wp-content/uploads/2017/02/bulldogge-hunderasse-760x560.jpg" },
        { Id: 2, Name: "Wellensittich", Art: "Vogel", image: "https://www.mdr.de/wissen/naturwissenschaften-technik/wellensittich-120-resimage_v-variantBig16x9_w-704.jpg?version=45404" }
    ]
    return (
        <div className="AnimalCardContainer">
            {animals.slice().map((animal) =>
                <AnimalCard key={animal.Id} Name={animal.Name} Art={animal.Art} image={animal.image}> </AnimalCard>)}
        </div>
    );
}

export default App;
