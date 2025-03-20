import { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";
import PropTypes from "prop-types";

const CounterCard = ({ icon, number, text }) => {
    const [startCount, setStartCount] = useState(false);
    const cardRef = useRef(null);

    useEffect(() => {
        const currentRef = cardRef.current; // Guardamos la referencia en una variable

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setStartCount(true);
                }
            },
            { threshold: 0.8 } // Se activa cuando el 80% del elemento es visible
        );

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return (
        <div className="counter-card" ref={cardRef}>
            <div className="iconNum">{icon}</div>
            <h2 className="titleCardNumbers">
                {startCount ? (
                    <CountUp start={0} end={number} duration={2.5} separator="," />
                ) : (
                    0
                )}
                +
            </h2>
            <p className="textCardNumbers">{text}</p>
        </div>
    );
};

CounterCard.propTypes = {
    icon: PropTypes.node.isRequired,
    number: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
};

export default CounterCard;
