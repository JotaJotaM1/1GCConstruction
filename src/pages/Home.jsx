import "../styles/pages/Home.css";
import { Link } from 'react-router-dom';
import portadaHome from '../assets/portadaHome.jpg';
import remoKitchenHome from '../assets/remoKitchenHome.jpg';
import remoBathroomHome from '../assets/remoBathroomHome.jpg';
import remoComerHome from '../assets/remoComerHome.jpg';
import 'bootstrap-icons/font/bootstrap-icons.css';


function Home() {
    return (
        <main>
            <section>
                <div className="cnt-title">
                    <h1 className="titleHome">Florida&rsquo;s Trusted Remodeling Contractor</h1>
                    <p className="subtitleHome">Residential & Commercial Experts</p>
                </div>
                <div>
                    <figure className="cnt-imgPortada">
                        <img className="portadaHome" src={portadaHome} alt="Portada" />
                        <Link className="textCTAimgPorta">
                            Get Your Free Project Estimate
                            <i className="arrowImgPorta bi bi-arrow-right"></i>
                        </Link>
                    </figure>
                </div>
            </section>
            <section>
                <div className="cnt-acordeonFather">
                    <div className="titleAcordenon">
                        <h2 className="subTitleAcor">Services</h2>
                        <button className="btnAcordeon">Explore All<i className="upRigAcordeon bi bi-arrow-up-right"></i></button>
                    </div>
                    <div>
                        <hr className="separaAcordeon"></hr>
                        <div className="cnt-cardAcordeon">
                            <h2 className="subcardAcorde"><span className="numCard">01</span>Kitchen Remodeling</h2>
                            <figure className="cnt-figureAcorde">
                                <img className="imgAcordeonHome" src={remoKitchenHome} alt="Kitchen Remodeling" />
                            </figure>
                            <div className="cnt-linkMoreAcordeon">
                                <Link to="/kitchen-remodeling" className="learnMoreLink">Learn More<i className="arrowLinkAcor bi bi-arrow-right"></i></Link>
                            </div>

                        </div>
                        <hr className="separaAcordeon"></hr>
                        <div className="cnt-cardAcordeon">
                            <h2 className="subcardAcorde"><span className="numCard">02</span>Bathroom Remodeling</h2>
                            <figure>
                                <img className="imgAcordeonHome" src={remoBathroomHome} alt="Bathroom Remodeling" />
                            </figure>
                            <div className="cnt-linkMoreAcordeon">
                                <Link to="/bathroom-remodeling" className="learnMoreLink">Learn More<i className="arrowLinkAcor bi bi-arrow-right"></i></Link>

                            </div>

                        </div>
                        <hr className="separaAcordeon"></hr>
                        <div className="cnt-cardAcordeon">
                            <h2 className="subcardAcorde"><span className="numCard">03</span>Commercial Build-Outs</h2>
                            <figure>
                                <img className="imgAcordeonHome" src={remoComerHome} alt="Commercial Build-Outs" />
                            </figure>
                            <div className="cnt-linkMoreAcordeon">
                                <Link to="/commercial-build-outs" className="learnMoreLink">Learn More<i className="arrowLinkAcor bi bi-arrow-right"></i></Link>
                            </div>
                        </div>
                        <hr className="separaAcordeon"></hr>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Home;