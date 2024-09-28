import React, { useState, useEffect } from 'react';

const Inicio = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="inicio">
      <h1>Bienvenid@ a nuestra tienda de ropa</h1>
      <p>
        ¡Descubre la última moda en ropa para hombre y mujer! Nuestra tienda ofrece una amplia variedad de prendas y accesorios para que puedas encontrar el estilo que te define.
      </p>
      <section className="seccion-destacados">
        <h2>Destacados de la semana</h2>
        <ul>
        <section className="seccion-destacados">
  
     <ul className="horizontal-list">
    {products.slice(0, 4).map((product, index) => (
      <li key={product.id} style={{ display: 'inline-block', marginRight: '20px' }}>
        <img src={product.image} alt={product.title} />
        <p>{product.title}</p>
        <p>Precio: ${product.price}</p>
      </li>
    ))}
  </ul>
</section>
        </ul>
      </section>
      <section className="seccion-beneficios">
  <h2>¿Por qué elegir nuestra tienda?</h2>
 
  <ul className="horizontal-list">
    {[
      { icon: 'fas fa-truck', text: 'Envío rápido y seguro' },
      { icon: 'fas fa-gift', text: 'Regalos y promociones especiales' },
      { icon: 'fas fa-undo', text: 'Devoluciones y cambios fáciles' }
    ].map((benefit, index) => (
      <li key={index} style={{ display: 'inline-block', marginRight: '20px' }}>
        <i className={benefit.icon}></i>
        <p>{benefit.text}</p>
      </li>
    ))}
  </ul>
</section>
<button>
  <a href="/Quienessomos">Explora nuestra colección</a>
</button>
    </div>
  );
};

export default Inicio;

