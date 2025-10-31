import { useState } from "react";
import "../Styles/_collapse.scss";

function Collapse({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="collapse">
            <div className="collapse-header" onClick={() => setIsOpen(!isOpen)}>
                <h2 style={{ fontSize: "14px" }}>{title}</h2>
                <span className={`arrow ${isOpen ? "open" : ""}`} style={{fontSize: "12px"}}><i className="fa-solid fa-chevron-down"></i></span>
            </div>
            <div className={`collapse-content ${isOpen ? "open" : ""}`}>
                {children}
            </div>
        </div>
    );
}

export default Collapse;


