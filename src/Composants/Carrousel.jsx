import { useState } from "react";
import "@/Styles/_carrousel.scss";

function Carrousel({ images }) {
    const [index, setIndex] = useState(0);

    const next = () => setIndex((prev) => (prev + 1) % images.length);
    const prev = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

    if (images.length === 0) return null;

    return (
        <div className="carrousel">
            <img src={images[index]} alt={`Slide ${index + 1}`} className="carrousel-image" />
            {images.length > 1 && (
                <>
                    <button className="prev" onClick={prev}><i className="fa-solid fa-chevron-left"></i></button>
                    <button className="next" onClick={next}><i className="fa-solid fa-chevron-right"></i></button>
                    <span className="counter">{index + 1}/{images.length}</span>
                </>
            )}
        </div>
    );
}

export default Carrousel;
