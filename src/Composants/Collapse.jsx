import { useState, useRef, useEffect } from "react";
import "../Styles/_collapse.scss";

function Collapse({ title, children, isOpen: controlledIsOpen, onToggle }) {

    // État local pour gérer l'ouverture si non contrôlé
    const [localOpen, setLocalOpen] = useState(false);

    // Déterminer si le composant est contrôlé ou non
    const isControlled = onToggle !== undefined;

    // Déterminer l'état d'ouverture actuel
    const isOpen = isControlled ? controlledIsOpen : localOpen;

    // Référence pour mesurer la hauteur du contenu
    const contentRef = useRef(null);

    // État pour la hauteur du contenu
    const [height, setHeight] = useState(0);

    // Met à jour la hauteur lors de l'ouverture/fermeture
    useEffect(() => {
        if (contentRef.current) {
            setHeight(isOpen ? contentRef.current.scrollHeight : 0);
        }
    }, [isOpen, children]);

    // Gère le clic sur l'en-tête
    const handleClick = () => {
        if (isControlled) {
            onToggle(); // Logement contrôle l'ouverture
        } else {
            setLocalOpen(!localOpen); // Apropos utilise son état local
        }
    };

    return (
        <div className="collapse">
            <div className="collapse-header" onClick={handleClick}>
                <h2>{title}</h2>
                <span className={`arrow ${isOpen ? "open" : ""}`}>
                    <i className="fa-solid fa-chevron-down"></i>
                </span>
            </div>
            <div
                ref={contentRef}
                className="collapse-content"
                style={{ height: `${height}px` }}
            >
                {children}
            </div>
        </div>
    );
}

export default Collapse;
