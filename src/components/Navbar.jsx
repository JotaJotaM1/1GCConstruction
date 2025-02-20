import { useState } from 'react';
import '../styles/components/Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            {/* Botón del menú hamburguesa */}
            <button className="navbar-toggle" onClick={toggleMenu}>
                {isOpen ? '✕' : '☰'} {/* Cambia entre ☰ y ✕ */}
            </button>

            {/* Menú desplegable */}
            <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
                <ul>
                    <li>
                        <a href="/" onClick={toggleMenu}>Inicio</a>
                    </li>
                    <li>
                        <a href="/about" onClick={toggleMenu}>Acerca de Nosotros</a>
                    </li>
                    <li>
                        <a href="/services" onClick={toggleMenu}>Servicios</a>
                    </li>
                    <li>
                        <a href="/contact" onClick={toggleMenu}>Contacto</a>
                    </li>
                    <li>
                        <a href="/blog" onClick={toggleMenu}>Blog</a>
                    </li>
                </ul>
            </div>

            {/* Logo */}
            <div className="navbar-logo">MiLogo</div>
        </nav>
    );
};

export default Navbar;