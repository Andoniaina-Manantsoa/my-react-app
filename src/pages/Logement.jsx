import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Collapse from "../Composants/Collapse.jsx";
import Carrousel from "../Composants/Carrousel.jsx";

function Logement() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [logement, setLogement] = useState(null);

    // État pour savoir quel collapse est ouvert
    const [openCollapse, setOpenCollapse] = useState(null);

    useEffect(() => {
        fetch("/logements.json")
            .then((res) => res.json())
            .then((data) => {
                const found = data.find((item) => item.id === id);
                if (!found) {
                    navigate("/error");
                } else {
                    setLogement(found);
                }
            });
    }, [id, navigate]);

    if (!logement) return null;

    return (
        <div className="logement-page">
            <Carrousel images={logement.pictures} />

            <div className="logement-header">
                <div className="logement-info">
                    <h1>{logement.title}</h1>
                    <p>{logement.location}</p>
                    <div className="logement-tags">
                        {logement.tags.map((tag) => (
                            <span key={tag} className="tag">{tag}</span>
                        ))}
                    </div>
                </div>
                
                <div className="logement-host">
                    <div className="host-info">
                        <div className="host-name">{logement.host.name}</div>
                        <img src={logement.host.picture} alt={logement.host.name} className="host-photo" />
                    </div>
                    <div className="logement-rating">
                        {Array.from({ length: 5 }, (_, i) => (
                            <span key={i} className={i < logement.rating ? "star filled" : "star"}>★</span>
                        ))}
                    </div>
                </div>
            </div>

            <div className="logement-collapses">
                <Collapse
                    title="Description"
                    isOpen={openCollapse === "Description"}
                    onToggle={() => setOpenCollapse(openCollapse === "Description" ? null : "Description")}
                >
                    <p>{logement.description}</p>
                </Collapse>

                <Collapse
                    title="Équipements"
                    isOpen={openCollapse === "Équipements"}
                    onToggle={() => setOpenCollapse(openCollapse === "Équipements" ? null : "Équipements")}
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
