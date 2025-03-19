import { useState } from "react";
import item1 from "../assets/cocina.jpg";
import item2 from "../assets/bano.jpg";
import item3 from "../assets/dormitorio.jpg";
import item4 from "../assets/salas.jpg";
import "../styles/components/Acordeon.css"; // Importamos los estilos

const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const sections = [
        { id: 1, title: "Service 1", content: "This is the content for service 1.", image: item1 },
        { id: 2, title: "Service 2", content: "This is the content for service 2.", image: item2 },
        { id: 3, title: "Service 3", content: "This is the content for service 3.", image: item3 },
        { id: 4, title: "Service 4", content: "This is the content for service 4.", image: item4 },
    ];

    const toggleSection = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="accordion">
            {sections.map((section, index) => (
                <div key={section.id} className="accordion-item">
                    <div className="accordion-header" onClick={() => toggleSection(index)}>
                        <h3 className="tittleAcordionHeader">{section.title}</h3>
                        <i className={`bi bi-chevron-down icon ${activeIndex === index ? "open" : ""}`}></i>
                    </div>
                    <div className={`accordion-content ${activeIndex === index ? "show" : ""}`}>
                        <img className="imgItemAcordeon" src={section.image} alt={`Imagen de ${section.title}`} />
                        <p className="textContentAcorde">{section.content}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Accordion;
