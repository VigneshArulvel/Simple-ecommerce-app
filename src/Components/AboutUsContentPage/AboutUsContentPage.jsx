import * as ReactBootstrap from "react-bootstrap";
import './AboutUsContentPage.css';
import Image from 'react-bootstrap/Image';
import Icon from '../../images/about-us.jpg';

function AboutUsContentPage(){
    var aboutUsTextTitle = "Phasellus vel interdum elit";
    var aboutUsTextValue = "Photo Credit goes to Pexels website. Aliquam erat volutpat. Pellentesque fringilla, ligula consectetur cursus scelerisque, leo elit pellentesque sapien, et pharetra arcu elit vitae sem. Suspendisse erat dui, condimentum in mi ac, varius tempor sapien. Donec in justo sit amet ex aliquet maximus ac quis erat.\n  Donec fermentum tincidunt tellus quis fermentum. Proin eget imperdiet purus. Nulla facilisi. Aliquam tincidunt porttitor dui sed euismod. Duis est libero, rhoncus fermentum turpis id, tempus fringilla ipsum. Nullam venenatis tincidunt neque vel hendrerit. Suspendisse porta pretium porttitor. \n Pixie HTML Template can be converted into your desired CMS theme. You can use this Bootstrap v4.1.3 layout for any online shop. Please tell your friends about Tooplate. Thank you.";
    return(
        <ReactBootstrap.Container id = "aboutUsContentPageContainer">
            <div className = "row">
                <div id = "AUCTitle">
                    About Us
                </div>
                <div className = "row">
                    <Image fluid src = {Icon} id = "aboutUsImage" className = "col-md-6">
                    </Image>
                    <div id = "aboutUsText" className = "col-md-6">
                        <p id = "AUtitle">{aboutUsTextTitle}</p>
                        {/* {aboutUsTextValue} */}
                        {aboutUsTextValue.split("\n").map((i,key) => {
                            return <div key={key} className = "abTextDiv">{i}</div>;
                        })}
                    </div>
                </div>
            </div>
        </ReactBootstrap.Container>
    );
}

export default AboutUsContentPage;