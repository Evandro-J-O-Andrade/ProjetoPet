import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../styles.css";

function Products({ produtos, openWhats }) {
  const [showCarousel, setShowCarousel] = useState(false);

  // fallback caso produtos esteja vazio
  const produtosTest = produtos && produtos.length > 0
    ? produtos
    : Array.from({ length: 8 }).map((_, i) => ({
        nome: `Produto ${i + 1}`,
        preco: `R$${(i + 1) * 50}`,
        image: "https://via.placeholder.com/200x160",
      }));

  const promoProducts = produtosTest.slice(0, 4);
  const moreProducts = produtosTest.slice(4);

  const settings = {
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    arrows: true,
    focusOnSelect: true,
  };

  return (
    <section id="produtos" className="produtos">
      <h2>Produtos em Promoção</h2>

      <div className="lista-produtos">
        {promoProducts.map((p, i) => (
          <div key={i} className="produto-card paw-card">
            <img src={p.image} alt={p.nome} className="produto-img" />
            <h3>{p.nome}</h3>
            <p className="preco">{p.preco}</p>
            <button
              className="btn-produto"
              onClick={() =>
                openWhats(`Olá! Quero comprar: ${p.nome} - ${p.preco}`)
              }
            >
              Pedir pelo Whats
            </button>
          </div>
        ))}
      </div>

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button
          className="btn-ver-mais"
          onClick={() => setShowCarousel(!showCarousel)}
        >
          {showCarousel ? "Fechar" : "Veja mais produtos"}
        </button>
      </div>

      {showCarousel && (
        <div className="carrossel-slick">
          <Slider {...settings}>
            {moreProducts.map((p, i) => (
              <div key={i}>
                <div className="produto-card paw-card">
                  <img src={p.image} alt={p.nome} className="produto-img" />
                  <h3>{p.nome}</h3>
                  <p className="preco">{p.preco}</p>
                  <button
                    className="btn-produto"
                    onClick={() =>
                      openWhats(`Olá! Quero comprar: ${p.nome} - ${p.preco}`)
                    }
                  >
                    Pedir pelo Whats
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      )}
    </section>
  );
}

export default Products;
