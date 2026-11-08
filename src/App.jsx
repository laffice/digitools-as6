import { Suspense, use, useState } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import CartSection from "./Components/CartSection/CartSection";
import Explore from "./Components/Explore Section/Explore";
import Footer from "./Components/footer/Footer";
import GetStarted from "./Components/GetStarted/GetStarted";
import Navbar from "./Components/Navbar/Navbar";
import Pricing from "./Components/Pricing/Pricing";
import Rating from "./Components/Rating/Rating";
import { ToastContainer } from "react-toastify";

const fetchData = async()=>{
  const res = await fetch("/data.json");
  return res.json();
}





const promisedData =  fetchData();

function App() {
  const [selectedCarts, setSelectedCarts]= useState([]);
const cartsData = use(promisedData);
  return (
    <>
    <Navbar selectedCarts={selectedCarts} ></Navbar>
    <hr className="text-gray-200"/>
    <Banner></Banner>
    <Rating></Rating>
   <Suspense fallback= {<span className="loading loading-spinner loading-xl"></span>}>
     <CartSection selectedCarts={selectedCarts} setSelectedCarts={setSelectedCarts} cartsData={cartsData}></CartSection>
   </Suspense>
   <GetStarted></GetStarted>
   <Pricing></Pricing>
   <Explore></Explore>
   <Footer></Footer>
   <ToastContainer    position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        
        ></ToastContainer>
    </>
  );
}

export default App;
