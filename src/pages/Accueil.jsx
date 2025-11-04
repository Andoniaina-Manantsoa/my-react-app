import Card from "@/Composants/Card.jsx";
import { useEffect, useState } from "react";
import { Link } from "react-router";

function Accueil() {

    // État pour stocker les logements
    const [logements, setLogements] = useState([]);

    // État pour gérer le chargement et les erreurs
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Récupération des données des logements au chargement du composant
    useEffect(() => {
        fetch("/logements.json")
            
            // Vérification de la réponse et conversion en JSON
            .then((res) => {
                if (!res.ok) throw new Error(`Erreur HTTP ! statut : ${res.status}`);
                return res.json();
            })

            // Mise à jour de l'état avec les données récupérées
            .then((data) => {
                setLogements(data);
                setLoading(false);
            })

            // Gestion des erreurs
            .catch((err) => {
                console.error("Erreur lors de la récupération des logements :", err);
                setError(err);
                setLoading(false);
            });
    }, []);

    // Rendu conditionnel en fonction de l'état de chargement et des erreurs
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

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
