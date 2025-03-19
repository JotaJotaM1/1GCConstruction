import CounterCard from "../components/CounterCard";
import "../styles/components/StatsSection.css";
import { BsCheckCircle, BsLightningCharge, BsEmojiSmile } from "react-icons/bs";

const StatsSection = () => {
    return (
        <div className="stats-container">
            <CounterCard icon={<BsCheckCircle />} number={120} text="Successful Projects" />
            <CounterCard icon={<BsLightningCharge />} number={10} text="Years of Experience" />
            <CounterCard icon={<BsEmojiSmile />} number={50} text="Happy Clients" />
        </div>
    );
};

export default StatsSection;

