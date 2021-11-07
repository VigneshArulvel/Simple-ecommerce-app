import * as ReactBootstrap from "react-bootstrap";
import './ProductDescriptionPage.css';
import Carousel from 'react-bootstrap/Carousel';
import ItemsDataObject from "./PdpData";
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

function ProductDescriptionPage(props){
    console.log(props, "in pdp page");
    var allObjectData = ItemsDataObject;
    var data = [props.pdpData, ...allObjectData.products];
    var productDescription = "Proin commodo, diam a ultricies sagittis, erat odio rhoncus metus, eu feugiat lorem lacus aliquet arcu. Curabitur in gravida nisi, non placerat nibh. Praesent sit amet diam ultrices, commodo turpis id, dignissim leo. Suspendisse mauris massa, porttitor non fermentum vel, ullamcorper scelerisque velit.";
    console.log(data, "data object in pdp")
    return(
        <ReactBootstrap.Container id = "ProductDescriptionPageContainer">
            <div id = "PDPTitle">
                {props.pdpData.Title}
            </div>
            <div className = "row">
                <div className = "col-md-6" id = "pdpImageDiv">
                    <Carousel>
                        {
                            data.map((data, i) => 
                            (
                            <Carousel.Item key = {i} interval = {'1000000'}>
                                <img
                                key = {i}
                                className="d-block w-100"
                                src={data.Image}
                                alt="First slide"
                                />
                                {/* <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption> */}
                            </Carousel.Item>)
                        )}
                    </Carousel>
                </div>
                <div className = "col-md-6" id = "pdpDescriptionDiv">
                    <div id= "pdpDescTitle">{props.pdpData.Title}</div>
                    <br></br>
                    <br></br>
                    <div id= "pdpDescPrice">{props.pdpData.Price}</div>
                    <br></br>
                    <div id = "pdpProductDesc">
                        <p>{productDescription}</p>
                    </div>
                    <div id = "pdpDescCategory">
                        <p>Category : <span id = "pdpCategoryValues">Lifestyle</span></p>
                    </div> 
                    <div id = "pdpAvailableDiv">
                        <p id = "pdpDescAvailable">7 left on stock</p>
                        <div className = "row col-6 col-sm-8 col-md-12 col-lg-8">
                            <div className = "col-sm-4">
                                <p className= "" id = "pdpQuantityText">Quantity:</p>
                            </div>
                            <div className = "col-sm-4 col-6">
                                <InputGroup className="mb-3" id = "availableCountInputField" >
                                <FormControl aria-label="availableCount" />
                                </InputGroup>
                            </div>
                            <div className = "col-sm-4 col-2" id = "pdpOrdernowButton">
                                <Button id = "pdpOrderButton">Order now</Button>
                            </div>
                        </div>
                    </div>         
                </div>
            </div>
        </ReactBootstrap.Container>
    );
}
export default ProductDescriptionPage;