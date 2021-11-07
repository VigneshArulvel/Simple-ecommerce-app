import * as ReactBootstrap from "react-bootstrap";
import './ContactUsContentPage.css';
// import GoogleMapReact from "google-map-react";
// import MapContainer from './MapContainer';
// const  googleMapsApiKey = "AIzaSyBl2oJaWVIAGrzYmMPeHSm0IQnwVm0WXMU";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function ContactUsContentPage(){
    return(
        <ReactBootstrap.Container id = "contactUsContentPageContainer">
            <div id = "CUCTitle">
                Contact Us
            </div>
            {/* <MapContainer></MapContainer> */}
            <div className = "row">
              <div id="map" className = "col-md-6">
                <iframe id = "mapIframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1197183.8373802372!2d-1.9415093691103689!3d6.781986417238027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdb96f349e85efd%3A0xb8d1e0b88af1f0f5!2sKumasi+Central+Market!5e0!3m2!1sen!2sth!4v1532967884907"></iframe>
              </div>
              <div className = "col-md-6" id = "formDivContainer">
              <Form>
                <div className = "row">
                  <div className = "col-md-6">
                    <Form.Group className="mb-3" controlId="formBasicName">
                      {/* <Form.Label>Your name</Form.Label> */}
                      <Form.Control type="text" placeholder="Enter name" required/>
                    </Form.Group>
                  </div>  
                  <div className = "col-md-6">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      {/* <Form.Label>Email address</Form.Label> */}
                      <Form.Control type="email" placeholder="Enter email" required/>
                      {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                      </Form.Text> */}
                    </Form.Group>
                  </div>
                </div>
                <Form.Group className="mb-3" controlId="formBasicTitle">
                  {/* <Form.Label>Subject</Form.Label> */}
                  <Form.Control type="text" placeholder="Subject" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  {/* <Form.Label>Enter message</Form.Label> */}
                  <Form.Control as="textarea" rows={7} placeholder="Your message" required/>
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group> */}
                <Button variant="primary" type="submit" id = "sendMessageButton">
                  Send message
                </Button>
              </Form>
              </div>
            </div>
        </ReactBootstrap.Container>
    );
}

export default ContactUsContentPage;