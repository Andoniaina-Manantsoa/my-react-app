import React from "react";

function Card({ image, title }) {
    return (
        <div className="card">
            <div className="card__header">
                <img src={image} alt={title} />
                <h2 className="card-title">{title}</h2>
            </div>
        </div>
    );
}

export default React.memo(Card);

