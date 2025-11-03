import { useState, useRef, useEffect } from "react";
import "../Styles/_collapse.scss";

function Collapse({ title, children, isOpen: controlledIsOpen, onToggle }) {
    const [localOpen, setLocalOpen] = useState(false);
    const isControlled = onToggle !== undefined;
    const isOpen = isControlled ? controlledIsOpen : localOpen;

    const contentRef = useRef(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (contentRef.current) {
            setHeight(isOpen ? contentRef.current.scrollHeight : 0);
        }
    }, [isOpen, children]);

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
