import "../styles/pages/Services.css";

function Services() {
    return (
        <main>
            <section>
                <div>
                    <h1 className="titleH1Services">Our Services</h1>
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
        </main>
    );
}

export default Services;