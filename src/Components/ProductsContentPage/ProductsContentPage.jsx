import * as ReactBootstrap from "react-bootstrap";
import './ProductsContentPage.css';
import Productspagination from './Productspagination';


function ProductsContentPage(props){
    function itemClicked(data){
        props.itemClicked(data);
    }
    return(
        <ReactBootstrap.Container id = "productsContentPageContainer">
            <div id = "PCTitle">
                Products
            </div>
            <div id = "productsContainer">
                <div className = "row">
                <Productspagination itemClicked = {itemClicked} ></Productspagination>
                </div>
            </div>
            
        </ReactBootstrap.Container>
    );
}
export default ProductsContentPage;