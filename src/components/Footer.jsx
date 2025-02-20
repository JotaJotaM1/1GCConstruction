import '../styles/components/Footer.css';
import LogoTemporal from '../assets/Logotemporal.png';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Footer = () => {
    return (
        <footer>
            <div className='cnt-footer'>
                <div className='cnt-logoName'>
                    <img src={LogoTemporal} className='LogoFooter'></img>
                    <p className='textLogoFooter'>MiLogo</p>
                </div>
                <ul className='ulLogo'>
                    <li className='liLogo'>Testimoni</li>
                    <li className='liLogo'>FAQ</li>
                    <li className='liLogo'>Pricing</li>
                    <li className='liLogo'>Gallery</li>
                    <li className='liLogo'>Blog</li>
                </ul>
                <div className='cnt-contactUsFooter'>
                    <div className='cnt-btnFooterEmail'>
                        <p className="email">1GCConstrution@.com</p>
                        <button className="contact-button">Contact Us</button>
                    </div>
                </div>
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
                <div className='cnt-Polit'>
                    <ul>
                        <li className='cnt-Politli'>Privacy Policy</li>
                        <li className='cnt-Politli'>Term and Conditions</li>
                    </ul>
                    <p className='text-resve'>All Right Reserved, © 2025 1GCConstrution</p>
                </div>
            </div>
        </footer>
    )
};

export default Footer;