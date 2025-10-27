import { useEffect, useState } from "react";
import Card from "../Composants/Card.jsx";

function Accueil() {
    const [logements, setLogements] = useState([]);

    useEffect(() => {
        fetch("/logements.json")
            .then((res) => res.json())
            .then((data) => setLogements(data))
    }, []);

    return (
        <div>
            <div className="banner banner--home">
                <div className="banner__overlay"></div>
                <h1 className="banner__title">Chez vous, partout et ailleurs</h1>
            </div>
            <div className="card-grid">
                {logements.map((logement) => (
                    <Card
                        key={logement.id}
                        image={logement.cover}
                        title={logement.title}
                    />
                ))}
            </div>
        </div>
    );
}

export default Accueil;

