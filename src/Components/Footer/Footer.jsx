import * as ReactBootstrap from "react-bootstrap";
import './Footer.css';
import Image from 'react-bootstrap/Image';
import Icon from '../../images/pngwing.png';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons"

function Footer({tabClicked}) {
  return (
    <ReactBootstrap.Container fluid id = "">
        <Image fluid src = {Icon} id = "FooterAppIcon">
        </Image>
        <div className = "">
            <ButtonGroup className="mb-2 row" id = "FooterTabs">
                <ReactBootstrap.Button className = "FooterButtonClass col-8 col-sm-1" onClick={() => {tabClicked("Home");}}>Home</ReactBootstrap.Button>
                <ReactBootstrap.Button className = "FooterButtonClass col-8 col-sm-1" onClick={() => {tabClicked("Products");}}>Products</ReactBootstrap.Button>
                <ReactBootstrap.Button className = "FooterButtonClass col-8 col-sm-1" onClick={() => {tabClicked("AboutUs");}}>About us</ReactBootstrap.Button>
                <ReactBootstrap.Button className = "FooterButtonClass col-8 col-sm-1" onClick={() => {tabClicked("ContactUs");}}>Contact us</ReactBootstrap.Button>
            </ButtonGroup>
        </div>
        <div className = "">
            <ButtonGroup className="mb-2 row" id = "FooterIcons">
                <FontAwesomeIcon icon={faFacebook} className = "FooterIcon col-8 col-sm-8"/>
                <FontAwesomeIcon icon={faTwitter} className = "FooterIcon col-8 col-sm-8"/>
                <FontAwesomeIcon icon={faLinkedin} className = "FooterIcon col-8 col-sm-8"/>
                <FontAwesomeIcon icon={faInstagram} className = "FooterIcon col-8 col-sm-8"/>
            </ButtonGroup>
        </div>
        <div id = "FooterCopyrightDiv">
            <p>Copyright © 2021 Company Name - Design </p>
        </div>
    </ReactBootstrap.Container>
  );
}

export default Footer;
