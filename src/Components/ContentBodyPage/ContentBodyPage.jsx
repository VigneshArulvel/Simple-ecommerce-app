// import * as ReactBootstrap from "react-bootstrap";
import './ContentBodyPage.css';
import HomeContentpage from '../HomeContentPage/HomeContentPage';
import AboutUsContentpage from '../AboutUsContentPage/AboutUsContentPage';
import ContactUsContentpage from '../ContactUsContentPage/ContactUsContentPage';
import ProductsContentPage from '../ProductsContentPage/ProductsContentPage';
import ProductDescriptionPage from '../ProductDescriptionPage/ProductDescriptionPage';
import React from 'react';
import { useEffect } from 'react';
// const { forwardRef, useRef, useImperativeHandle } = React;


// const ContentPage = React.forwardRef((props, ref) => {
function ContentPage(props){
  // console.log(props, "in contentBodyPage");
  var pdpData = "";  
  const [tabSelected, settabSelected] = React.useState(props.tabSelected); 
  useEffect(() => {
    window.scrollTo(0, 0);
    settabSelected(props.tabSelected);
  });
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  var itemClicked = (data) => {
        pdpData = data;
        props.tabClicked("PDP", pdpData);
  } 
  if(tabSelected === "Home"){
    return (
        <>
            <HomeContentpage></HomeContentpage>
        </>
      );    
  }  
  else if (tabSelected === "AboutUs"){
    return (
        <>
            <AboutUsContentpage></AboutUsContentpage>
        </>
      );
  }
  else if (tabSelected === "ContactUs"){
    return (
        <>
            <ContactUsContentpage></ContactUsContentpage>
        </>
      );
  }
  else if (tabSelected === "Products"){
    return (
        <>
            <ProductsContentPage itemClicked = {itemClicked} ></ProductsContentPage>
        </>
      );
  }
  else if (tabSelected === "PDP"){
    return (
        <>
            <ProductDescriptionPage pdpData = {props.pdpData}></ProductDescriptionPage>
        </>
      );
  }
  else{
    return (
        <>
            <HomeContentpage></HomeContentpage>
        </>
    );
  }
}   

export default ContentPage;
