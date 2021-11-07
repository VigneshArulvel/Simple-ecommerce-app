import * as ReactBootstrap from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import './TitleContainer.css';
import Icon from '../../images/pngwing.png';

function TitleContainer() {
  return (
    <ReactBootstrap.Container fluid id = "titleContainerDiv">
        <Image fluid src = {Icon} id = "titleIcon">
        </Image>
    </ReactBootstrap.Container>
  );
}

export default TitleContainer;
