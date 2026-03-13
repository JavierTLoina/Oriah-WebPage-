import "../components/MainContent.scss";
import product1 from "../assets/product1.webp";
import product2 from "../assets/product2.webp";
import product3 from "../assets/product3.webp";
import product4 from "../assets/product4.webp";
import product5 from "../assets/product5.webp";
import product6 from "../assets/product6.webp";
import product7 from "../assets/product7.webp";
import product8 from "../assets/product8.webp";
import product9 from "../assets/product9.webp";
import product10 from "../assets/product10.webp";
import product11 from "../assets/product11.webp";
import product12 from "../assets/product12.webp";

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
  {
    id: 9,
    image: product9,
    title: "Producto Artesanal Exclusivo",
    description:
      "Pieza artesanal única creada con materiales de alta calidad, perfecta para decorar o regalar. Diseño pensado para integrarse con cualquier estilo y aportar un toque especial al ambiente.",
    price: "RD$200",
    instagramUrl:
      "https://www.instagram.com/oficialoriah?utm_source=qr&igsh=bnh5YzM4ejBuNW5x",
  },
  {
    id: 10,
    image: product10,
    title: "Arreglo Floral Mixto",
    description:
      "Combinación armoniosa de flores de yeso y velas aromáticas en una base decorativa. Una creación versátil que une belleza visual con aroma delicado, perfecta para regalos especiales.",
    price: "RD$380",
    instagramUrl:
      "https://www.instagram.com/oficialoriah?utm_source=qr&igsh=bnh5YzM4ejBuNW5x",
  },
  {
    id: 11,
    image: product11,
    title: "Escultura de Yeso Artística",
    description:
      "Pieza escultórica desarrollada con técnicas artesanales avanzadas. Cada detalle es cuidadosamente moldeado para crear una obra de arte única que transformará cualquier espacio.",
    price: "RD$320",
    instagramUrl:
      "https://www.instagram.com/oficialoriah?utm_source=qr&igsh=bnh5YzM4ejBuNW5x",
  },
];

export default function MainContent() {
  return (
    <>
      <main className="main-container">
        <h1 id="sobreNosotros">Sobre Oriah</h1>
        <div className="p-box">
          <p className="main-p">
            Oriah nace del deseo de crear piezas con intención y significado.
            Aquí creamos piezas artesanales pensadas para transformar momentos
            en detalles especiales. Nos enfocamos en la elaboración de velas
            artesanales, piezas en yeso y bouquet de velas y de yeso.
            <br />
            <br /> Cada una de nuestras piezas es hecha a mano con cuidado y
            dedicación, con el objetivo de darle a nuestros clientes piezas
            diseñadas para regalas, decorar y acompañar distintos espaicos.
            Nuestro compromiso es entregar calidad, diseño y detalle para que
            cada vela o pieza decorativa llegue a tus manos lista para iluminar
            y decorar. 27:1
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
                    alt={`${product.title} - Vela artesanal de Oriah`}
                    className="product-image"
                    loading="lazy"
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
                    aria-label={`Ver ${product.title} en Instagram`}
                  >
                    Instagram
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="custom-product-section">
          <div className="custom-product-card">
            <div className="custom-product-content">
              <div className="custom-product-text">
                <h2 className="custom-product-title">
                  Personaliza Tu Propio Arreglo
                </h2>
                <p className="custom-product-subtitle">
                  Crea una pieza única y especial
                </p>
                <p className="custom-product-description">
                  ¿Tienes una visión? En Oriah podemos hacerla realidad. Desde
                  flores de yeso personalizadas hasta arreglos aromáticos a tu
                  medida, diseñamos cada detalle según tus preferencias y
                  presupuesto. Contacta con nosotros para conocer las opciones
                  de personalización disponibles.
                </p>
                <a
                  href="https://www.instagram.com/oficialoriah?utm_source=qr&igsh=bnh5YzM4ejBuNW5x"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="custom-product-btn"
                >
                  Consulta tu Personalización
                </a>
              </div>
              <div className="custom-product-image">
                <img
                  src={product12}
                  alt="Personalización"
                  className="custom-image"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="care-section">
          <h2 className="care-title">Tips de cuidado para tus piezas</h2>

          <div className="care-features">
            {/* Limpieza */}
            <div className="care-card">
              <div className="care-icon sparkle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z"
                  />
                </svg>
              </div>

              <h3>Limpieza</h3>
              <p>
                Usa un paño suave y agua limpia. Evita químicos abrasivos que
                puedan dañar el sellador o el concreto.
              </p>
            </div>

            {/* Golpes */}
            <div className="care-card">
              <div className="care-icon shield">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                  />
                </svg>
              </div>

              <h3>Golpes</h3>
              <p>
                Aunque las piezas son resistentes, evita caídas o golpes fuertes
                para mantenerlas en perfecto estado.
              </p>
            </div>

            {/* Trato */}
            <div className="care-card">
              <div className="care-icon careful">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728L5.636 5.636"
                  />
                </svg>
              </div>

              <h3>Trato</h3>
              <p>
                Cuídalas como una pieza de cerámica o vidrio. El concreto
                artesanal también puede ser delicado.
              </p>
            </div>

            {/* Variaciones */}
            <div className="care-card">
              <div className="care-icon heart">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
              </div>

              <h3>Variaciones</h3>
              <p>
                Cada pieza es única. Las variaciones de color y pequeñas
                burbujas forman parte natural de su belleza.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
