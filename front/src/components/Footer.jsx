// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="footer">
      {/* Contenido del footer */}
      <div className="redes-sociales"> 
        <p>Encuéntranos en redes sociales:&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
        <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
        <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
        <a href="#"><FontAwesomeIcon icon={faGithub} /></a> </p>
      </div>
      <p>© 2024 FinalBadRequest. Todos los derechos reservados.</p>
    </footer>
  );
}

export default Footer;
