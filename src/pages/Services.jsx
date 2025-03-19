import "../styles/pages/Services.css";
import item1 from '../assets/item1.jpg';
import item2 from '../assets/item2.jpg';
import CtaAll from '../components/CtaAll';
import Acordeon from "../components/Acordeon";

function Services() {
    return (
        <main>
            <section className="sectionTittle">
                <div className="hero-container">
                    <h1 className="hero-title">
                        Elevate Your Products <br /> with Precision and Artistry
                    </h1>
                    <img src={item1} alt="Decoración" className="floating-image image-1" />
                    <img src={item2} alt="Decoración" className="floating-image image-2" />
                </div>
            </section>
            <section>
                <div>
                    <h2 className="titleH1Services">Our Services</h2>
                    <p className="textH1Services">We begin by understanding your vision and translating it into creative, functional design concepts, Helping you choose the perfect design style to reflect your personality and needs.</p>
                </div>
            </section>
            <section>
                <div className="grid-container">
                    <div className="grid-item item1"></div>
                    <div className="grid-item item2"></div>
                    <div className="grid-item item3"></div>
                </div>
            </section>
            <section>
                <Acordeon />
            </section>
            <section>
                <CtaAll />
            </section>
        </main>
    );
}

export default Services;