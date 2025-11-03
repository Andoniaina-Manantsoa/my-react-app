function Card({ image, title }) {
    return (
        <div className="card">
            <div className="card__header">
                <img src={image} alt={title} />
            </div>
            <div className="card__body">
                <h2>{title}</h2>
            </div>
        </div>
    );
}
export default Card;