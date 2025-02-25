import { Link } from 'react-router-dom'; // Importa Link para enlaces internos
import '../styles/components/Footer.css';
import LogoTemporal from '../assets/Logotemporal.png';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Footer = () => {
    return (
        <footer>
            <div className='cnt-footer'>
                {/* Logo y nombre */}
                <div className='cnt-logoName'>
                    <img src={LogoTemporal} className='LogoFooter' alt="Logo" /> {/* Agrega el atributo alt */}
                    <p className='textLogoFooter'>MiLogo</p>
                </div>

                {/* Enlaces internos */}
                <ul className='ulLogo'>
                    <li className='liLogo'>
                        <Link className='linkInternal' to="/">Home</Link> {/* Usa Link para enlaces internos */}
                    </li>
                    <li className='liLogo'>
                        <Link className='linkInternal' to="/services">Services</Link> {/* Usa Link para enlaces internos */}
                    </li>
                    <li className='liLogo'>
                        <Link className='linkInternal' to="/resources">Resources</Link> {/* Usa Link para enlaces internos */}
                    </li>
                    <li className='liLogo'>
                        <Link className='linkInternal' to="/portfolio">Portfolio</Link> {/* Usa Link para enlaces internos */}
                    </li>
                </ul>

                {/* Contacto */}
                <div className='cnt-contactUsFooter'>
                    <div className='cnt-btnFooterEmail'>
                        <p className="email">1GCConstrution@.com</p>
                        <button className="contact-button">Contact Us</button>
                    </div>
                </div>

                {/* Redes sociales (enlaces externos) */}
                <div className='cnt-iconSocialMedia'>
                    <ul className="social-icons">
                        <li>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-instagram"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-facebook"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-whatsapp"></i>
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Políticas y derechos reservados */}
                <div className='cnt-Polit'>
                    <ul>
                        <li className='cnt-Politli'>
                            <Link className='linkInternalPoliti' to="/privacy-policy">Privacy Policy</Link> {/* Usa Link para enlaces internos */}
                        </li>
                        <li className='cnt-Politli'>
                            <Link className='linkInternalPoliti' to="/terms-and-conditions">Term and Conditions</Link> {/* Usa Link para enlaces internos */}
                        </li>
                    </ul>
                    <p className='text-resve'>All Right Reserved, © 2025 1GCConstrution</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;