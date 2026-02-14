import "./Footer.scss";
import MainVideo from "../assets/MainVideo.mp4";
import LogoWhite from "../assets/logoWhite.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="contacto">
      <div className="footer-video-section">
        <video autoPlay muted loop className="footer-video">
          <source src={MainVideo} type="video/mp4" />
          Tu navegador no soporta videos HTML5
        </video>
        <div className="footer-video-overlay"></div>
        <div className="footer-video-text">
          <div className="video-text-content">
            <div className="text-section">
              <h2>Impresiona con tu próximo regalo!</h2>
              <h3 className="descubre">
                Descubre nuestra coleccion en nuestras redes
              </h3>
            </div>
            <div className="logo-section">
              <img src={LogoWhite} alt="Oriah Logo" className="footer-logo" />
            </div>
          </div>
        </div>
      </div>

      <div className="footer-content">
        <div className="footer-grid">
          <div className="footer-section">
            <h3>Sobre Oriah</h3>
            <p>
              Creamos piezas artesanales con intención y significado. Cada vela
              y pieza decorativa es hecha a mano con cuidado y dedicación.
            </p>
          </div>

          <div className="footer-section">
            <h3>Contacto</h3>
            <ul className="contact-list">
              <li>
                <a href="oficialoriah@gmail.com" className="contact-link">
                  oficialoriah@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="contact-link">
                  Llamar!
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Síguenos</h3>
            <div className="social-links">
              <a
                href="https://www.instagram.com/oficialoriah"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link instagram"
              >
                Instagram
              </a>
              <a
                href="https://facebook.com/oriah"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link facebook"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Oriah. Todos los derechos reservados.</p>
          <p>Hecho por JaviDB</p>
        </div>
      </div>
    </footer>
  );
}
