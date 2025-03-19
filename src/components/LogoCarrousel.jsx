import "../styles/components/LogoCarrousel.css"; 
import wechat from "../assets/wechat-grey.svg";
import viber from "../assets/viber-grey.svg";
import tesla3 from "../assets/tesla-3.svg";
import tesla9 from "../assets/tesla-9.svg";
import kickstarter from "../assets/kickstarter-grey.svg";
import instagram from "../assets/instagram-2.svg";
import kpn from "../assets/kpn.svg";

const logos = [wechat, viber, tesla3, tesla9, kickstarter, instagram, kpn];

const LogoCarrousel = () => {
    return (
        <div className="carousel-container">
            <div className="carousel-track">
                {logos.concat(logos).map((logo, index) => (
                    <img key={index} src={logo} alt={`Logo ${index}`} className="carousel-logo" />
                ))}
            </div>
        </div>
    );
};

export default LogoCarrousel;

