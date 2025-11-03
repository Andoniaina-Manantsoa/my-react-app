import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // ← à ajouter
import Card from "../Composants/Card.jsx";

function Accueil() {

    // État pour stocker les logements
    const [logements, setLogements] = useState([]);

    // Récupération des données des logements au chargement du composant
    useEffect(() => {
        fetch("/logements.json")
            .then((res) => res.json())
            .then((data) => setLogements(data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <div>
            <div className="banner banner--home">
                <div className="banner__overlay"></div>
                <h1 className="banner__title">Chez vous, partout et ailleurs</h1>
            </div>
            <div className="card-grid">
                {logements.map((logement) => (
                    <Link key={logement.id} to={`/logement/${logement.id}`}>
                        <Card
                            image={logement.cover}
                            title={logement.title}
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Accueil;
