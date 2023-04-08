import React from "react";
import "./Contacto.css";
import emailJs from "emailjs-com";
import { Navigate, useNavigate } from "react-router-dom";

const Contacto = () => {
  const [nombre, setNombre] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [mensaje, setMensaje] = React.useState("");
  const [template, setTemplate] = React.useState("template_1");
  const navigate = useNavigate();

  const cambiarTemplate = (e) => {
    setTemplate(e.target.value);
  };
  function enviarEmail(e) {
    e.preventDefault();

    emailJs
      .sendForm(
        "service_xxtulhh",
        "template_9bagdwb",
        e.target,
        "KyTGrNZjSXzOX8jdr"
      )
      .then(
        (result) => {
          console.log(result.text);
          navigate("/Gracias");
        },
        (error) => {
          console.log(error.text);
        }
      );
    setEmail("");
    setNombre("");
    setMensaje("");
  }

  return (
    <div className="formcontacto">
      <h1>Si tiene alguna duda puede contactar con nosotros</h1>
      <form action="" className="formulario" onSubmit={enviarEmail}>
        <input
          type="text"
          name="nombre"
          id="nombre"
          placeholder="Nombre"
          maxLength={10}
          required
          onChange={(e) => setNombre(e.target.value)}
          value={nombre}
        />
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <textarea
          className="mensaje"
          type="textarea"
          name="mensaje"
          id="mensaje"
          placeholder="Mensaje"
          row="10"
          column="10"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
        />
        <button className="continue-application">
          <div>
            <div className="pencil"></div>
            <div className="folder">
              <div class="top">
                <svg viewBox="0 0 24 27">
                  <path d="M1,0 L23,0 C23.5522847,-1.01453063e-16 24,0.44771525 24,1 L24,8.17157288 C24,8.70200585 23.7892863,9.21071368 23.4142136,9.58578644 L20.5857864,12.4142136 C20.2107137,12.7892863 20,13.2979941 20,13.8284271 L20,26 C20,26.5522847 19.5522847,27 19,27 L1,27 C0.44771525,27 6.76353751e-17,26.5522847 0,26 L0,1 C-6.76353751e-17,0.44771525 0.44771525,1.01453063e-16 1,0 Z"></path>
                </svg>
              </div>
              <div className="paper"></div>
            </div>
          </div>
          Enviar
        </button>
      </form>
      <div className="social-buttons-container">
        <a
          href="https://www.facebook.com/vibafit"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="social-button facebook">Facebook</button>
        </a>
        <a
          href="https://wa.me/34618073528"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="social-button whatsapp">WhatsApp</button>
        </a>
        <a
          href="https://www.tiktok.com/@vivebailandovibafit"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="social-button tiktok">TikTok</button>
        </a>
        <a
          href="https://www.instagram.com/vibafit/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="social-button instagram">Instagram</button>
        </a>
      </div>
    </div>
  );
};

export default Contacto;
