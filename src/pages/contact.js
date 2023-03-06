import React, { useState } from "react";

export default function Form() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState(false);
  const [asunto, setAsunto] = useState("");
  const [mensage, setMensage] = useState("");
  const [error, setError] = useState(false);

  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

  function validarEmail(e) {
    const validateEmail = e.target.value;
    if (regexEmail.test(validateEmail)) {
      setEmail(true);
    } else {
      setEmail(false);
    }
  }
  return (
    <div className="form-group row mt-4">
      <div className="col-lg-4 offset-lg-4 font">
        <form
          action="/success"
          name="contact"
          method="POST"
          data-netlify-recaptcha="true"
          data-netlify="true"
          className="card border-info mb-3"
          style={{ maxWidth: 800, maxHeight: 1600 }}
        >
          <input type="hidden" name="form-name" value="contact" />
          <h4 className="card-header text-center text-secondary">Formulario de Contacto</h4>
          <div className="card-body">
            <div>
              <label className="mt-2">Nombre</label>
              <input
                onChange={(e) => setNombre(e.target.value)}
                type="text"
                name="nombre"
                className="form-control mt-2 rounded"
                placeholder="Ingrese nombre"
              />
              {nombre.length <= 0 ? (
                <h6 className="text-danger text-center mt-2">
                  El nombre es necesario.
                </h6>
              ) : (
                ""
              )}
            </div>

            <div>
              <label className="mt-2">Email</label>
              <input
                onChange={validarEmail}
                type="email"
                name="email"
                className="form-control mt-2 rounded"
                placeholder="Ingrese email"
              />
              {!email ? (
                <h6 className="text-danger text-center mt-2">
                  El email es necesario.
                </h6>
              ) : (
                ""
              )}
            </div>
            <div>
              <label className="mt-2">Mensage: </label>
              <textarea
                name="message"
                onChange={(e) => setMensage(e.target.value)}
                className="form-control mt-2 rounded"
                rows="3"
                id="mensage"
              ></textarea>
              {mensage.length <= 5 ? (
                <h6 className="text-danger text-center mt-2">
                  Ingrese el mensage.
                </h6>
              ) : (
                ""
              )}
            </div>
          </div>
          <div data-netlify-recaptcha="true"></div>
          <div
            className="g-recaptcha text-center"
            data-sitekey="6LfQbNkkAAAAAFhKQ8ieBZ3sVNtCGTFXXp25Uss7"
          ></div>

          {nombre.length >= 2 &&
            email &&
            asunto.length > 2 &&
            mensage.length > 5 && (
              <div className="container text-center mb-2">
                <button
                  type="submit"
                  className="btn btn-primary btn-sm shadow rounded"
                >
                  Send <i className="bi bi-send"></i>
                </button>
              </div>
            )}
        </form>
      </div>
    </div>
  );
}
