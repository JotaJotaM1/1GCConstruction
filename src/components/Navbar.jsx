import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header>
            <nav className="navbar">
                {/* Botón del menú hamburguesa */}
                <button className="navbar-toggle" onClick={toggleMenu}>
                    {isOpen ? '✕' : '☰'}
                </button>

                {/* Menú desplegable */}
                <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
                    <ul>
                        <li>
                            <Link to="/" onClick={toggleMenu}>Home</Link> {/* Usa Link */}
                        </li>
                        <li>
                            <Link to="/Services" onClick={toggleMenu}>Services</Link> {/* Usa Link */}
                        </li>
                        <li>
                            <Link to="/Resources" onClick={toggleMenu}>Resources</Link> {/* Usa Link */}
                        </li>
                        <li>
                            <Link to="/Portfolio" onClick={toggleMenu}>Portfolio</Link> {/* Usa Link */}
                        </li>
                    </ul>
                </div>
                <div className="navbar-logo">MiLogo</div>
            </nav>
        </header>
    );
};

export default Navbar;