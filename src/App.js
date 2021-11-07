import './App.css';
import Header from './Components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import TitleContainer from './Components/TitleContainer/TitleContainer';
import Tabs from './Components/Tabs/Tabs';
import ContentPage from './Components/ContentBodyPage/ContentBodyPage';
import SubscriptionContainer from './Components/SubscriptionContainer/SubscriptionContainer';
import Footer from './Components/Footer/Footer';
import React from 'react'; 
import LoadingOverlay from 'react-loading-overlay';
// import Spinner from 'react-bootstrap/Spinner'
// const { forwardRef, useRef, useImperativeHandle } = React;

function App() {
  // const childRef = useRef();
  const [tabSelected, settabSelected] = React.useState("Home");
  const [pdpData, setPdpData] = React.useState("");
  const [isActive, setIsActive] = React.useState(false);
  const tabClicked = (data, pdpDataValue) => { // the callback. Use a better name
    settabSelected(data);
    setIsActive(true);
    setTimeout(setIsActive, 1000, false);
    if(typeof pdpDataValue !== 'undefined' && pdpDataValue !== null && pdpDataValue !== ""){
      setPdpData(pdpDataValue);
    }
  };
  return (
    <LoadingOverlay
  active={isActive}
  spinner
  text='Loading...'
  >
    <div className="App">
      {/* <Spinner animation="grow" /> */}
      <Header></Header>
      <TitleContainer></TitleContainer>
      <Tabs tabClicked={tabClicked}></Tabs>
      <ContentPage 
      // ref={childRef}
      tabSelected = {tabSelected} tabClicked = {tabClicked} pdpData = {pdpData}
      ></ContentPage>
      <SubscriptionContainer></SubscriptionContainer>
      <Footer tabClicked={tabClicked}></Footer>
    </div>
    </LoadingOverlay>
  );
}

export default App;
