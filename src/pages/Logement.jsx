import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Carrousel from "@/Composants/Carrousel.jsx";
import Collapse from "@/Composants/Collapse.jsx";

function Logement() {
    // Récupération de l'ID du logement depuis les paramètres d'URL
    const { id } = useParams();
    const navigate = useNavigate();

    // États pour le logement, le chargement, l'erreur et les collapses ouverts
    const [logement, setLogement] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [openCollapses, setOpenCollapses] = useState([]);

    // Fetch du logement en fonction de l'ID
    useEffect(() => {
        fetch("/logements.json")
            .then((res) => {
                if (!res.ok) throw new Error(`Erreur HTTP : ${res.status}`);
                return res.json();
            })
            .then((data) => {
                const found = data.find((item) => item.id === id);
                if (!found) navigate("*");
                else setLogement(found);
            })
            .catch((err) => {
                console.error("Erreur lors du fetch logement :", err);
                setError(err.message);
            })
            .finally(() => setLoading(false));
    }, [id, navigate]);

    // Effet global uniquement sur cette page
    useEffect(() => {
        if (openCollapses.length > 0) {
            document.body.classList.add("body--collapsed");
        } else {
            document.body.classList.remove("body--collapsed");
        }
    }, [openCollapses]);

    // Gestion de l'ouverture/fermeture des collapses
    const handleToggle = (title) => {
        setOpenCollapses(prev =>
            prev.includes(title)
                ? prev.filter(t => t !== title)
                : [...prev, title]
        );
    };

    // Affichage en fonction de l'état
    if (loading) return <div>Chargement...</div>;
    if (error) return <div>Erreur : {error}</div>;
    if (!logement) return null;

    return (
        <div className="logement-page">
            <Carrousel images={logement.pictures} />

            <div className="logement-header">
                <div className="logement-info">
                    <h1>{logement.title}</h1>
                    <p>{logement.location}</p>
                    <div className="logement-tags">
                        {logement?.tags?.map((tag) => (
                            <span key={tag} className="tag">{tag}</span>
                        ))}
                    </div>
                </div>

                <div className="logement-host">
                    <div className="host-info">
                        <div className="host-name">{logement.host.name}</div>
                        <img
                            src={logement.host.picture}
                            alt={logement.host.name}
                            className="host-photo"
                        />
                    </div>
                    <div className="logement-rating">
                        {Array.from({ length: 5 }, (_, i) => (
                            <span
                                key={i}
                                className={i < logement.rating ? "star filled" : "star"}
                            >
                                ★
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <div className="logement-collapses">
                <Collapse
                    title="Description"
                    isOpen={openCollapses.includes("Description")}
                    onToggle={() => handleToggle("Description")}
                >
                    <p>{logement.description}</p>
                </Collapse>

                <Collapse
                    title="Équipements"
                    isOpen={openCollapses.includes("Équipements")}
                    onToggle={() => handleToggle("Équipements")}
                >
                    <ul>
                        {logement.equipments.map((eq) => (
                            <li key={eq}>{eq}</li>
                        ))}
                    </ul>
                </Collapse>
            </div>
        </div>
    );
}

export default Logement;
