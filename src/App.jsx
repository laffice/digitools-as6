import "./App.css";
import Banner from "./Components/Banner/Banner";
import CartSection from "./Components/CartSection/CartSection";
import Explore from "./Components/Explore Section/Explore";
import Footer from "./Components/footer/Footer";
import GetStarted from "./Components/GetStarted/GetStarted";
import Navbar from "./Components/Navbar/Navbar";
import Pricing from "./Components/Pricing/Pricing";
import Rating from "./Components/Rating/Rating";





function App() {
  return (
    <>
    <Navbar></Navbar>
    <hr className="text-gray-200"/>
    <Banner></Banner>
    <Rating></Rating>
    <CartSection></CartSection>
   <GetStarted></GetStarted>
   <Pricing></Pricing>
   <Explore></Explore>
   <Footer></Footer>
    </>
  );
}

export default App;
