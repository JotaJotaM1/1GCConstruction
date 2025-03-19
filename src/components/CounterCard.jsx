import { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";
import PropTypes from "prop-types";

const CounterCard = ({ icon, number, text }) => {
    const [startCount, setStartCount] = useState(false);
    const cardRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setStartCount(true);
                }
            },
            { threshold: 0.8 }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => {
            if (cardRef.current) {
                observer.unobserve(cardRef.current);
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
