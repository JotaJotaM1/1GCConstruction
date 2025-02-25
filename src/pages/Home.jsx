import "../styles/pages/Home.css";
import { Link } from 'react-router-dom';
import portadaHome from '../assets/portadaHome.jpg';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Home() {
    return (
        <main>
            <div className="cnt-title">
                <h1 className="titleHome">Trusted General Contractors in Central & South Florida – Residential & Commercial Remodeling Experts</h1>
                <p className="subtitleHome">Looking for licensed general contractors in Florida? We specialize in kitchen and bathroom remodeling, home additions, and commercial renovations. We deliver transparent pricing, detailed estimates, and 24-month labor warranties. Serving Miami, Orlando, Tampa, and surrounding areas, we’re your one-stop solution for projects that blend quality craftsmanship with Florida’s unique building standards – from hurricane-resistant upgrades to ADA-compliant designs.</p>
            </div>
            <div>
                <figure className="cnt-imgPortada">
                    <img className="portadaHome" src={portadaHome} alt="Portada" />
                    <Link className="textCTAimgPorta">
                        Get Your Free Project Estimate
                        <i className="arrowImgPorta bi bi-arrow-right"></i> {/* Usa className en lugar de class */}
                    </Link>
                </figure>
            </div>
        </main>
    );
}

export default Home;