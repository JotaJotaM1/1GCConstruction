import "../styles/pages/Home.css";
import { Link } from 'react-router-dom';
import portadaHome from '../assets/portadaHome.jpg';
import remoKitchenHome from '../assets/remoKitchenHome.jpg';
import remoBathroomHome from '../assets/remoBathroomHome.jpg';
import remoComerHome from '../assets/remoComerHome.jpg';
import Steps from '../components/Steps';
import CtaAll from '../components/CtaAll';
import 'bootstrap-icons/font/bootstrap-icons.css';


function Home() {
    return (
        <main>
            <section>
                <div className="cnt-imgPortadaHome">
                    <figure className="cnt-imgPortada">
                        <img className="portadaHome" src={portadaHome} alt="Portada" />
                        <div className="cnt-title">
                            <h1 className="titleHome">Florida&rsquo;s Trusted Remodeling Contractor</h1>
                            <p className="subtitleHome">Residential & Commercial Experts</p>
                        </div>
                        <Link className="textCTAimgPorta">
                            Get Your Free Project Estimate
                            <i className="arrowImgPorta bi bi-arrow-right"></i>
                        </Link>
                    </figure>
                </div>
            </section>
            <section>
                <div className="cnt-acordeonFather">
                    <div>
                        <h2 className="subTittleService">Top Residential & Commercial Remodeling Services in Florida</h2>
                    </div>
                    <div>
                    </div>
                    <div className="parent">
                        <div className="cnt-card">
                            <h2 className="tittleCardServices"><span className="NumCardService">01</span>Kitchen Remodeling</h2>
                            <figure>
                                <img className="imgCardService" src={remoKitchenHome}></img>
                            </figure>
                            <div className="cnt-tag">
                                <span className="tagServices">
                                    palabra 1
                                </span>
                                <span className="tagServices">
                                    palabra 1.2
                                </span>
                            </div>
                        </div>
                        <div className="cnt-card">
                            <h2 className="tittleCardServices"><span className="NumCardService">02</span>Bathroom Remodeling</h2>
                            <figure>
                                <img className="imgCardService" src={remoBathroomHome}></img>
                            </figure>
                            <div className="cnt-tag">
                                <div className="tagServices">
                                    palabra 2
                                </div>
                                <div className="tagServices">
                                    palabra 2.2
                                </div>
                            </div>
                        </div>
                        <div className="cnt-card">
                            <h2 className="tittleCardServices"><span className="NumCardService">03</span>Commercial Build-Outs</h2>
                            <figure>
                                <img className="imgCardService" src={remoComerHome}></img>
                            </figure>
                            <div className="cnt-tag">
                                <div className="tagServices">
                                    palabra 3
                                </div>
                                <div className="tagServices">
                                    palabra 3.3
                                </div>
                            </div>
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
                        <button className="btn-Hww btn-steps">
                            Schedule a Free Q&A Cal
                            <i className="arrowbtnHww bi bi-arrow-right"></i>
                        </button>
                    </Link>
                </div>
            </section>
            <section>
                <Steps />
                <div className="cnt-btnStep">
                    <button className="btn-steps">Watch Our Process Video<i className="arrowbtnHww bi bi-arrow-right"></i></button>
                </div>
            </section>
            <section>
                <div className="cnt-fatherResorces">
                    <div>
                        <h2 className="tittleResorces">Essential Resources for Florida Homeowners</h2>
                    </div>
                    <div className="cnt-cardResorces">
                        <h2 className="titlle-cardResorces"><i className="iconrResorcesGuide bi bi-rulers"></i>2024 Remodeling Cost Guide</h2>
                        <p className="text-cardResorces">Florida Pricing per Sq.Ft - Kitchen, Bath & More</p>
                        <button className="btn-cardResorces">Download Free PDF</button>
                    </div>
                    <div className="cnt-cardResorces">
                        <h2 className="titlle-cardResorces"><i className="iconrResorcesList bi bi-check-square-fill"></i>Contractor Vetting Checklist</h2>
                        <p className="text-cardResorces">50 Red Flags to Avoid When Hiring</p>
                        <button className="btn-cardResorces">Get Checklist</button>
                    </div>
                    <div className="cnt-cardResorces">
                        <h2 className="titlle-cardResorces"><i className="iconrResorcesCalculate bi bi-bar-chart-line-fill"></i>2024 Remodeling Cost Guide</h2>
                        <p className="text-cardResorces">Estimate Your Project’s Value Increase</p>
                        <button className="btn-cardResorces">Calculate Now</button>
                    </div>
                </div>
            </section>
            <section>
                <div>
                    <div>
                        <h2 className="tittleTotalServi">Explore Our Services</h2>
                        <p className="textTotalServi">Residential, commercial, and industrial clients trust our expertise to carry out construction and remodeling projects with exceptional results. We have a team of highly skilled professionals and a wide range of services to bring any project to life, from renovations to large-scale constructions.</p>
                    </div>
                    <div className="cnt-linkServices">
                        <ul>
                            <li><Link to="#">Architectural design and planning</Link></li>
                            <li><Link to="#">New construction projects</Link></li>
                            <li><Link to="#">Full home remodeling</Link></li>
                            <li><Link to="#">Additions and renovations</Link></li>
                            <li><Link to="#">Office and commercial space construction</Link></li>
                            <li><Link to="#">Facade remodeling</Link></li>
                            <li><Link to="#">Interior design and construction</Link></li>
                            <li><Link to="#">Electrical and plumbing installations</Link></li>
                            <li><Link to="#">Waterproofing and thermal insulation</Link></li>
                            <li><Link to="#">Pool and recreational area construction</Link></li>
                            <li><Link to="#">Flooring, finishes, and coatings</Link></li>
                            <li><Link to="#">Metal and concrete structures</Link></li>
                            <li><Link to="#">Custom carpentry and furniture</Link></li>
                            <li><Link to="#">Sustainable and energy-efficient construction</Link></li>
                            <li><Link to="#">Project management and supervision</Link></li>
                            <li><Link to="#">Construction consulting and advisory</Link></li>
                        </ul>
                    </div>
                    <CtaAll />
                </div>
            </section>
        </main>
    );
}

export default Home;