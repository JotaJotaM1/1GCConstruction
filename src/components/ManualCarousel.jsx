import { useRef } from "react";
import "../styles/components/ManualCarousel.css";
import carroManu1 from "../assets/carroManu1.jpg";
import carroManu2 from "../assets/carroManu2.jpg";
import carroManu3 from "../assets/carroManu3.jpg";
import carroManu4 from "../assets/carroManu4.jpg";

const images = [carroManu1, carroManu2, carroManu3, carroManu4];

export default function ManualCarousel() {
    const carouselRef = useRef(null);

    return (
        <div className="carousel-container">
            <div className="carousel-wrapper" ref={carouselRef}>
                <div className="carousel">
                    {images.map((src, i) => (
                        <div key={i} className="carousel-item">
                            <img src={src} alt={`Imagen ${i + 1}`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

