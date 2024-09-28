import React from 'react';

const Contacto = () => {
  return (
    <div className="contact-form">
      <h2>Contactanos</h2>
      <h5>En caso de dudas o inquietudes no olvides contactarte con nosotros</h5>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <br />
        <label>
          Message:
          <textarea name="message" />
        </label>
        <br />
        <button type="submit">ENVIAR</button>
      </form>
    </div>
  );
};

export default Contacto;