import React from "react";

function Card({ image, title }) {
    return (
        <div className="card">
            <img className="image" src={image} alt={title} />
            <div className="card__overlay"></div>
            <h2 className="card-title">{title}</h2>
        </div>
    );
}

export default React.memo(Card);

