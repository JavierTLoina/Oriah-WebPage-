import "./Nav.scss";
import LogoBlack from "../assets/logoBlack.png";
import LogoWhite from "../assets/logoWhite.png";

interface NavProps {
  mode: string;
  toggleMode: () => void;
  letters: string;
  textColor: string;
}

export default function Nav({
  mode,
  toggleMode,
  letters,
  textColor,
}: NavProps) {
  return (
    <>
      <h1 id="upText">
        Siguenos en nuetro instagram como:{" "}
        <a
          className="instagramUpLink"
          href="https://www.instagram.com/oficialoriah?utm_source=qr&igsh=bnh5YzM4ejBuNW5x"
        >
          oficialoriah
        </a>
      </h1>
      <nav className="nav" style={{ backgroundColor: mode }}>
        <img
          src={mode === "#F5F5F7" ? LogoBlack : LogoWhite}
          alt="Logo"
          className="logo"
          style={{ cursor: "pointer" }}
          onClick={() => window.location.reload()}
          title="Recargar página"
        />

        <ul className="menu">
          <li>
            <a href="#sobreNosotros" className={textColor}>
              Sobre nosotros
            </a>
          </li>
          <li>
            <a href="#titleProductos" className={textColor}>
              Productos
            </a>
          </li>
          <li>
            <a href="#titleProductos" className={textColor}>
              Precios
            </a>
          </li>
          <li>
            <a href="#contacto" className={textColor}>
              Contacto
            </a>
          </li>
        </ul>

        <div className="menu-2">
          <a href="https://www.instagram.com/oficialoriah?utm_source=qr&igsh=bnh5YzM4ejBuNW5x">
            <h1 className="instagram">Instagram</h1>
          </a>
          <h1 className="facebook">Facebook</h1>

          <button
            onClick={toggleMode}
            className={`border-2 !px-4 !py-2 rounded-xl transition-all duration-300 ease-in-out hover:scale-95
          ${mode === "#F5F5F7" ? "border-black text-black" : "border-white text-white"}`}
          >
            {letters}
          </button>
        </div>
      </nav>
    </>
  );
}
