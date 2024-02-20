import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact__wrapper">
        <h2 className="contact__title"> Quieres Contactarnos?</h2>
        <form className="form" action="" method="get">
          <div className="form__email">
            <span className="form__email-icon"></span>
            <input
              className="form__email-input"
              type="email"
              name="email"
              placeholder="Ingresa tu correo electrónico"
              required=""
            ></input>
          </div>
          <textarea
            className="form__textarea"
            name="message"
            placeholder="Escribe tu mensaje aquí..."
            minlength="5"
            required=""
          ></textarea>
          <div className="form__btns">
            <button type="reset" className="form__btn form__btn_type_reset">
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
    </section>
  );
}

export default Contact;
