import * as ReactBootstrap from "react-bootstrap";
import './HomeContentPage.css';

function HomeContentPage(){
    return(
        <ReactBootstrap.Container id = "homePageContainer">
            <ReactBootstrap.Container>
                <div className = "row">
                    <div className = "col-md-12">
                        <div id = "HomePageDesc">
                            <div id = "DescTitle">
                                Sample ecommerce app
                            </div>
                            <div id = "DescContent">
                                You can use this template for the various app and easy to use it. And its very user friendly.
                            </div>
                                <ReactBootstrap.Button id = "HomePageOrdernowButton">Order Now</ReactBootstrap.Button>
                        </div>
                    </div>
                </div>
            </ReactBootstrap.Container>
        </ReactBootstrap.Container>
    );
}

export default HomeContentPage;