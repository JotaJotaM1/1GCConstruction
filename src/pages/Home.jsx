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
                        <h2 className="subTittleService">Top Residential & Commercial Remodeling Services in Florida</h2>
                    </div>

                    <div className="parent">
                        <div className="cnt-card">
                            <h2 className="tittleCardServices"><span className="NumCardService">01</span>Kitchen Remodeling</h2>
                            <figure>
                                <img className="imgCardService" src={remoKitchenHome}></img>
                            </figure>
                            <link>
                            </link>
                        </div>
                        <div className="cnt-card">
                            <h2 className="tittleCardServices"><span className="NumCardService">02</span>Bathroom Remodeling</h2>
                            <figure>
                                <img className="imgCardService" src={remoBathroomHome}></img>
                            </figure>
                            <link>
                            </link>
                        </div>
                        <div className="cnt-card">
                            <h2 className="tittleCardServices"><span className="NumCardService">03</span>Commercial Build-Outs</h2>
                            <figure>
                                <img className="imgCardService" src={remoComerHome}></img>
                            </figure>
                            <link>
                            </link>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div>
                    <h2 className="subTittleChoseUs">Why Florida Trusts Us for Remodeling & Repairs</h2>
                </div>
                <div>
                    <div className="parent2">
                        <div className="cnt-card2">
                            <figure className="icon-container">
                                <i className="iconUs bi bi-badge-3d-fill"></i>
                            </figure>
                            <h2 className="tittleCard2">3D Project Preview</h2>
                            <p className="textcard2">See your remodel digitally before we start</p>
                        </div>
                        <div className="cnt-card2">
                            <figure className="icon-container">
                                <i className="iconUs bi bi-camera2"></i>
                            </figure>
                            <h2 className="tittleCard2">Daily Photo Updates</h2>
                            <p className="textcard2">Track progress via our client portal</p>
                        </div>
                        <div className="cnt-card2">
                            <figure className="icon-container">
                                <i className="iconUs bi bi-wallet-fill"></i>
                            </figure>
                            <h2 className="tittleCard2">Open-Book Pricing</h2>
                            <p className="textcard2">Hourly labor rates + material costs disclosed upfront</p>
                        </div>
                    </div>
                </div>
                <div className="cntButton">
                    <Link className="rutVideo" to="#">
                        <button className="btn-Hww">
                            Watch Our Process Video
                            <i className="arrowbtnHww bi bi-arrow-right"></i>
                        </button>
                    </Link>
                </div>
            </section>
        </main>
    );
}

export default Home;