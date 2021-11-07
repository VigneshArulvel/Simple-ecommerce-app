import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import './ProductsContentPage.css';
import ItemsDataObject from "./data";
import Card from 'react-bootstrap/Card';

class Productspagination extends React.PureComponent {
  
  constructor() {
    
    super();
    this.pageSize = 9;
    this.pagesCount = Math.ceil(ItemsDataObject.products.length / this.pageSize);

    this.state = {
      currentPage: 0
    };
    
  }

  handleClick(e, index) {
    
    e.preventDefault();

    this.setState({
      currentPage: index
    });
    
  }

  render() {
    
    const { currentPage } = this.state;

    return (
    
      <React.Fragment>
          {ItemsDataObject.products
            .slice(
              currentPage * this.pageSize,
              (currentPage + 1) * this.pageSize
            )
            .map((data, i) => 
                (
                <div key={i} className = "itemsDiv col-md-6 col-lg-4">
                 <Card style={{ width: '18rem' }} onClick={() => this.props.itemClicked(data)}>
                     <Card.Img variant="top" src= {data.Image} />
                     <Card.Body>
                         <Card.Title>{data.Title}</Card.Title>
                         <Card.Text>
                             {data.Price}
                         </Card.Text>
                     </Card.Body>
                 </Card>
             </div>)
            )}

        <div className="pagination-wrapper">
          
          <Pagination aria-label="Page navigation example">
            
            <PaginationItem disabled={currentPage <= 0}>
              
              <PaginationLink
                onClick={e => this.handleClick(e, currentPage - 1)}
                previous
                href="#"
              />
              
            </PaginationItem>

            {[...Array(this.pagesCount)].map((page, i) => 
              <PaginationItem active={i === currentPage} key={i}>
                <PaginationLink onClick={e => this.handleClick(e, i)} href="#">
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            )}

            <PaginationItem disabled={currentPage >= this.pagesCount - 1}>
              
              <PaginationLink
                onClick={e => this.handleClick(e, currentPage + 1)}
                next
                href="#"
              />
              
            </PaginationItem>
            
          </Pagination>
          
        </div>

          
      </React.Fragment>
    
    );
  
  }
  
}

export default Productspagination;