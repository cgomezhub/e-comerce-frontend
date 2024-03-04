import "./Contact.css";
import React, { useState } from "react";

function Contact({ onSendEmail, isLoading }) {
  const [replyto, setReplayto] = useState("");
  const [body, setBody] = useState("");

  const sendto = "cgomezlugo@hotmail.com";

  function handleEmail(e) {
    setReplayto(e.target.value);
  }
  function handleText(e) {
    setBody(e.target.value);
  }

  function resetForm() {
    setReplayto("");
    setBody("");
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const info = { replyto, body, sendto };

    onSendEmail(info);
  };

  return (
    <section className="contact" id="contact">
      <div className="contact__wrapper">
        <h2 className="contact__title"> Quieres Contactarnos?</h2>
        <form className="form" action="" method="get" onSubmit={handleSubmit}>
          <div className="form__email">
            <span className="form__email-icon"></span>
            <input
              className="form__email-input"
              type="email"
              name="email"
              value={replyto}
              onChange={handleEmail}
              placeholder="Ingresa tu correo electrónico"
              required
            ></input>
          </div>
          <textarea
            className="form__textarea"
            name="message"
            value={body}
            onChange={handleText}
            placeholder="Escribe tu mensaje aquí..."
            minLength="5"
            maxLength="2000"
            required
          ></textarea>
          <div className="form__btns">
            <button
              type="button"
              className="form__btn form__btn_type_reset"
              onClick={resetForm}
            >
              Reset
            </button>
            <button
              type="submit"
              className="form__btn form__btn_type_submit"
              disabled=""
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
      {isLoading && <i class="circle-preloader"></i>}
    </section>
  );
}

export default Contact;
