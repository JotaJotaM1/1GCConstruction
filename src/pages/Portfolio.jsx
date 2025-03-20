import "../styles/pages/Portfolio.css";
import ManualCarousel from "../components/ManualCarousel";
import TabsNavegation from "../components/TabsNavegation";
import Arquite1 from "../assets/arquite1.jpg";
import CtaAll from '../components/CtaAll';

function Portfolio() {
    return (
        <main>
            <div>
                <section>
                    <div className="heroContainerH1">
                        {/* Imágenes de fondo */}
                        <div className="background-images">
                            <img src={Arquite1} alt="Background 1" className="background-image" />
                        </div>

                        {/* Título */}
                        <div className="hero-text">
                            <h1>Elevate Your Style</h1>
                            <p>with Precision</p>
                        </div>
                    </div>
                </section>

                <section>
                    <ManualCarousel />
                </section>
                <section>
                    <h2 className="tittleResourH2">Our Projects</h2>
                    <p className="textTittleResourH2">We begin by understanding your vision and translating it into creative, functional design concepts, Helping you choose the perfect design style to reflect your personality and needs.</p>
                </section>
                <section>
                    <TabsNavegation />
                </section>
                <section>
                    <CtaAll />
                </section>
            </div>
        </main>
    );
}

export default Portfolio;