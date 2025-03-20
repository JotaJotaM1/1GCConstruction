import "../styles/pages/Resources.css";
import ManualCarousel from "../components/ManualCarousel";

function Resources() {
    return (
        <main>
            <div>
                <section>
                    <h1 className="tittleResourH1">Our Projects</h1>
                    <p className="textTittleResourH1">We begin by understanding your vision and translating it into creative, functional design concepts, Helping you choose the perfect design style to reflect your personality and needs.</p>
                </section>
                <section>
                    <ManualCarousel />
                </section>
            </div>
        </main>
    );
}

export default Resources;