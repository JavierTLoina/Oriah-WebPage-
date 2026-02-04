import "../components/MainContent.scss";
import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.png";
import product5 from "../assets/product5.png";
import product6 from "../assets/product6.png";
import product7 from "../assets/product7.png";
import product8 from "../assets/product8.png";

const CheckIcon = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="check-icon"
  >
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const products = [
  {
    id: 1,
    image: product1,
    title: "Joyero Minimalista de Yeso",
    description: "Joyero artesanal en yeso con diseño minimalista y elegante.",
    price: "RD$160",
    instagramUrl: "https://instagram.com",
  },
  {
    id: 2,
    image: product2,
    title: "Bouquet de Flores de Yeso",
    description:
      "Arreglo floral decorativo en yeso, perfecto para regalos especiales.",
    price: "RD$300",
    instagramUrl: "https://instagram.com",
  },
  {
    id: 3,
    image: product3,
    title: "Base Floral Elegante",
    description:
      "Base decorativa con flores en yeso, ideal para cualquier espacio.",
    price: "RD$280",
    instagramUrl: "https://instagram.com",
  },
  {
    id: 4,
    image: product4,
    title: "Escultura Abstracta Premium",
    description:
      "Pieza de arte abstracto en yeso de alta calidad para coleccionistas.",
    price: "RD$450",
    instagramUrl: "https://instagram.com",
  },
  {
    id: 5,
    image: product5,
    title: "Vela Aromática Envolvente",
    description: "Vela artesanal con fragancia envolvente y larga duración.",
    price: "RD$220",
    instagramUrl: "https://instagram.com",
  },
  {
    id: 6,
    image: product6,
    title: "Obra de Arte Geométrica",
    description:
      "Pieza escultórica geométrica en yeso, diseño exclusivo y moderno.",
    price: "RD$450",
    instagramUrl: "https://instagram.com",
  },
  {
    id: 7,
    image: product7,
    title: "Vela Aromática en Frasco",
    description: "Vela premium en frasco de vidrio con etiqueta artesanal.",
    price: "RD$150",
    instagramUrl: "https://instagram.com",
  },
  {
    id: 8,
    image: product8,
    title: "Set de Velas Decorativas",
    description: "Colección de 5 velas aromáticas en presentación especial.",
    price: "RD$150",
    instagramUrl: "https://instagram.com",
  },
];

export default function MainContent() {
  return (
    <>
      <main className="main-container">
        <h1 id="sobreNosotros">Sobre Nosotros</h1>
        <div className="p-box">
          <p className="main-p">
            Oriah nace del deseo de crear piezas con intención y significado.
            Aquí creamos piezas artesanales pensadas para transformar momentos
            en detalles especiales. Nos enfocamos en la elaboración de velas
            artesanales, piezas en yeso y bouquet de velas y de yeso. Cada una
            de nuestras piezas es hecha a mano con cuidado y dedicación, con el
            objetivo de darle a nuestros clientes piezas diseñadas para regalas,
            decorar y acompañar distintos espaicos. Nuestro compromiso es
            entregar calidad, diseño y detalle para que cada vela o pieza
            decorativa llegue a tus manos lista para iluminar y decorar. 27:1
          </p>

          <div className="about-features">
            <div className="feature">
              <div className="feature-icon">
                <CheckIcon />
              </div>
              <h3>Hecho a Mano</h3>
              <p>
                Cada pieza es elaborada artesanalmente con dedicación y cuidado
              </p>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <CheckIcon />
              </div>
              <h3>Calidad Premium</h3>
              <p>
                Materiales de alta calidad para piezas que duran en el tiempo
              </p>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <CheckIcon />
              </div>
              <h3>Diseño Único</h3>
              <p>
                Cada creación es especial, pensada para momentos inolvidables
              </p>
            </div>
          </div>
        </div>

        <h1 id="titleProductos">Productos</h1>
        <p className="upProducts">Productos</p>
        <h3 className="subtitleProductos">
          Nuestra coleccion completa llena de creatividad
        </h3>
        <div className="products-section">
          <div className="products-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image-container">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="product-image"
                  />
                </div>
                <div className="product-info">
                  <h3 className="product-title">{product.title}</h3>
                  <p className="product-description">{product.description}</p>
                  <span className="product-price-large">{product.price}</span>
                  <a
                    href={product.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-instagram"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
