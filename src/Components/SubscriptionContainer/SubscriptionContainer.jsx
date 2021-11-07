import * as ReactBootstrap from "react-bootstrap";
import './SubscriptionContainer.css';
import Form from 'react-bootstrap/Form'
// import Image from 'react-bootstrap/Image';
// import HomeBackGroundImage from '../../images/menlandingImage.jpg';

function SubscriptionContainer() {
  return (
    <ReactBootstrap.Container id = "SubscriptionContainer">
        <div id = "SCtitle">
            Subscribe on this ecommerce app now
        </div>
        <div id = "SCdesc">
            To Subscribe please enter your e-mail id, we will send you all the mandatory details.
        </div>
        <div id = "SCform">
            <div className = "">
                <Form>
                    <Form.Group className="mb-3 row" controlId="exampleForm.ControlInput1">
                        <div className = "row" id= "SCFormRow">
                            <div className = "col-md-4" id = "SCFormContainer">
                            <Form.Control type="email" placeholder="name@example.com" />
                            </div>
                            <ReactBootstrap.Button id = "SCFormButton" className = "col-md-4">
                            SUBSCRIBE NOW
                            </ReactBootstrap.Button>
                        </div>    
                    </Form.Group>
                </Form>    
            </div>
        </div>
    </ReactBootstrap.Container>
  );
}

export default SubscriptionContainer;
