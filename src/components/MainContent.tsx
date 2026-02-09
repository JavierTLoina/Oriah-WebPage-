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
    description:
      "Joyero pequeño elaborado a mano en yeso y cemento blanco, de diseño minimalista y elegante. Ideal para guardar joyas y pequeños objetos, aportando orden y estética a cualquier espacio. Medidas: aproximadamente 0.12 de ancho por 0.12 de largo y una altura de 0.80 metros",
    price: "RD$160",
    instagramUrl:
      "https://www.instagram.com/oficialoriah?utm_source=qr&igsh=bnh5YzM4ejBuNW5x",
  },
  {
    id: 2,
    image: product2,
    title: "Bouquet de Flores de Yeso",
    description:
      "Arreglo floral compuesto por 4 a 5 flores de yeso de distintos tamaños, y diversas decoraciones, con base sólida de yeso y cemento. Una pieza decorativa pensada para regalar y conservar en el tiempo. Medidas: aproximadamente un diámetro de 0.13 metros y una altura de 0.09 metros.",
    price: "RD$300",
    instagramUrl:
      "https://www.instagram.com/oficialoriah?utm_source=qr&igsh=bnh5YzM4ejBuNW5x",
  },
  {
    id: 3,
    image: product3,
    title: "Base Floral Elegante",
    description:
      "Base decorativa de diseño abstracto que integra 2 o 3 flores de yeso, con opción de incluir una vela. Ideal para aportar carácter, equilibrio y un toque artístico a cualquier ambiente. Medidas: 0.15 metros de diámetro.",
    price: "RD$280",
    instagramUrl:
      "https://www.instagram.com/oficialoriah?utm_source=qr&igsh=bnh5YzM4ejBuNW5x",
  },
  {
    id: 4,
    image: product4,
    title: "Escultura Abstracta Premium",
    description:
      " arreglo floral artesanal que combina una flor grande de vela con mecha, y flores decorativas tipo wax melts sin mecha. Una pieza de alta calidad que une diseño, aroma y calidez. Medidas: 0.13 metros de diametro y de altura 0.14 metos.",
    price: "RD$450",
    instagramUrl:
      "https://www.instagram.com/oficialoriah?utm_source=qr&igsh=bnh5YzM4ejBuNW5x",
  },
  {
    id: 5,
    image: product5,
    title: "Vela Aromática Envolvente",
    description:
      "Vela aromática presentada en una base de yeso pequeña con forma de corazón y flor decorativa. Diseñada para crear atmósferas acogedoras y convertirse en un regalo significativo.",
    price: "RD$220",
    instagramUrl:
      "https://www.instagram.com/oficialoriah?utm_source=qr&igsh=bnh5YzM4ejBuNW5x",
  },
  {
    id: 6,
    image: product6,
    title: "Obra de Arte Geométrica",
    description:
      "Bouquet compacto elaborado con una flor de vela, disponible con o sin mecha. Un detalle delicado y versátil para regalar o decorar espacios pequeños. Medida: aproximadamente 0.13 metros de diametro y de altura 0.14 metos.",
    price: "RD$450",
    instagramUrl:
      "https://www.instagram.com/oficialoriah?utm_source=qr&igsh=bnh5YzM4ejBuNW5x",
  },
  {
    id: 7,
    image: product7,
    title: "Vela Aromática en Frasco",
    description:
      "vela artesanal  individual en forma de corazón con mecha y etiqueta hecha a mano. Su forma de corazón y fragancia suave la convierten en un detalle ideal para momentos especiales.",
    price: "RD$150",
    instagramUrl:
      "https://www.instagram.com/oficialoriah?utm_source=qr&igsh=bnh5YzM4ejBuNW5x",
  },
  {
    id: 8,
    image: product8,
    title: "Set de Velas Decorativas",
    description:
      "Vela aromática individual con forma floral, elaborada cuidadosamente para aportar aroma, luz y armonía a cualquier espacio.",
    price: "RD$150",
    instagramUrl:
      "https://www.instagram.com/oficialoriah?utm_source=qr&igsh=bnh5YzM4ejBuNW5x",
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

        <p id="productos">Productos</p>
        <h3 className="subtitleProductos">
          Nuestra coleccion completa llena de creatividad
        </h3>
        <div className="products-section">
          <div className="products-grid">
            {products.map((product) => (
              <div
                key={product.id}
                id={`producto-${product.id}`}
                className="product-card"
              >
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
