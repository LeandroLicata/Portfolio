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
    <div className="row mt-1">
      <div className="col-lg-4 offset-lg-4">
        <form
          action="/success"
          name="contact"
          method="POST"
          data-netlify-recaptcha="true"
          data-netlify="true"
          class="card border-ligh mb-3 shadow rounded"
          style={{ maxWidth: 800, maxHeight: 1600 }}
        >
          <input type="hidden" name="form-name" value="contact" />
          <div class="card-header text-center">Formulario de Contacto</div>
          <div class="card-body">
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
              <label className="mt-2">Asunto</label>
              <input
                onChange={(e) => setAsunto(e.target.value)}
                type="text"
                name="asunto"
                className="form-control mt-2 rounded"
                placeholder="Ingrese asunto"
              />
              {asunto.length <= 2 ? (
                <h6 className="text-danger text-center mt-2">
                  Ingrese el asunto.
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
                class="form-control mt-2 rounded"
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
          {nombre.length >= 2 &&
            email &&
            asunto.length > 2 &&
            mensage.length > 5 && (
              <div className="container text-center mb-2">
                <button
                  type="submit"
                  class="btn btn-primary btn-sm shadow rounded"
                >
                  Send <i class="bi bi-send"></i>
                </button>
              </div>
            )}
        </form>
      </div>
    </div>
  );
}