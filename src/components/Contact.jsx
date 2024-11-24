import React from "react";

const Contact = () => (
    <section className="tiny-content">
        <h2 className="section_h2">
            <div className="texto-icono">
                Contacto <i className="icon icon-envelope primary-dark"></i>
            </div>
        </h2>
        <div className="contacto_grid">
            <div className="correo">
                <div className="btn-ct" id="copy">
                    <button className="btn">
                        <div className="texto-icono">
                            marianofrank@hotmail.com<i className="icon icon-copy"></i>
                        </div>
                    </button>
                    <div className="btn-bg"></div>
                </div>
                <div className="btn-ct" data-tippy-content="Envíame un mail">
                    <a className="btn btn-icon" href="mailto:marianofrank@hotmail.com">
                        <i className="icon icon-paper-plane"></i>
                    </a>
                    <div className="btn-bg"></div>
                </div>
            </div>
            <div className="redes_sociales">
                <div className="btn-ct">
                    <a href="https://www.instagram.com/marian_002" className="btn btn-icon" target="_blank">
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                    <div className="btn-bg"></div>
                </div>
                <div className="btn-ct">
                    <a href="https://www.linkedin.com/in/frankmariano/" className="btn btn-icon" target="_blank">
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <div className="btn-bg"></div>
                </div>
                <div className="btn-ct">
                    <a href="https://github.com/MarianoFrank" className="btn btn-icon" target="_blank">
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <div className="btn-bg"></div>
                </div>
            </div>
        </div>
    </section>
);

export default Contact;
