import { useState, useRef, useEffect } from "react";
import "@/Styles/_collapse.scss";

// Composant Collapse réutilisable avec mode contrôlé et non contrôlé
function Collapse({ title, children, isOpen: controlledIsOpen, onToggle }) {
    // Gestion de l'état local si non contrôlé
    const [localOpen, setLocalOpen] = useState(false);
    const isControlled = onToggle !== undefined;
    const isOpen = isControlled ? controlledIsOpen : localOpen;

    // Référence au contenu pour la gestion de la hauteur
    const contentRef = useRef(null);
    const [height, setHeight] = useState(0);

    // Met à jour la hauteur lors de l'ouverture/fermeture
    useEffect(() => {
        if (contentRef.current) {
            setHeight(isOpen ? contentRef.current.scrollHeight : 0);
        }
    }, [isOpen, children]);

    // Gestion du clic sur l'en-tête
    const handleClick = () => {
        if (isControlled) {
            onToggle();
        } else {
            setLocalOpen(!localOpen);
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
