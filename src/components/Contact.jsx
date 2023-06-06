import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, brands } from "@fortawesome/fontawesome-svg-core/import.macro";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

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
    <section id="contact">
      <div className="form-group row" style={{ paddingTop: "80px" }}>
        <div className="col-lg-4 offset-lg-4">
          <form
            action="/success"
            name="contact"
            method="POST"
            data-netlify="true"
            className="card border-info mb-3"
            style={{ maxWidth: 800, maxHeight: 1600 }}
          >
            <input type="hidden" name="form-name" value="contact" />
            <h4 className="card-header text-center text-secondary">Contacto</h4>
            <div className="card-body">
              <div>
                <label className="mt-2">Nombre:</label>
                <input
                  onChange={(e) => setNombre(e.target.value)}
                  type="text"
                  name="nombre"
                  className="form-control mt-2"
                  placeholder="Ingrese nombre..."
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
                <label className="mt-2">Email:</label>
                <input
                  onChange={validarEmail}
                  type="email"
                  name="email"
                  className="form-control mt-2"
                  placeholder="Ingrese email..."
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
                <label className="mt-2">Asunto:</label>
                <input
                  onChange={(e) => setAsunto(e.target.value)}
                  type="text"
                  name="asunto"
                  className="form-control mt-2"
                  placeholder="Ingrese asunto..."
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
                  className="form-control mt-2"
                  rows="3"
                  id="mensage"
                  placeholder="Mensaje..."
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

            {nombre.length >= 2 && email && mensage.length > 5 && (
              <div className="container text-center mb-2">
                <button type="submit" className="btn btn-outline-dark">
                  Send <i className="bi bi-send"></i>
                </button>
              </div>
            )}
          </form>
        </div>
        <div className="text-center row mt-4">
          <h6 className="col-12 col-md-4">
            <Link href="https://www.linkedin.com/in/leandro-nicol%C3%A1s-licata-522898265/">
              <FontAwesomeIcon
                icon={brands("linkedin")}
                className="text-primary mx-2"
                size="lg"
              />
              LinkedIn
            </Link>
          </h6>

          <h6 className="col-12 col-md-4">
            <Link href="https://github.com/LeandroLicata">
              <FontAwesomeIcon
                icon={brands("github")}
                className="text-primary mx-2"
                size="lg"
              />
              GitHub
            </Link>
          </h6>
          <h6 className="col-12 col-md-4">
            <FontAwesomeIcon
              icon={solid("envelope")}
              className="text-primary mx-2"
              size="lg"
            />
            leandrolicata1@gmail.com
          </h6>
        </div>
      </div>
    </section>
  );
}
