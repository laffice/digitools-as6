import "./App.css";
import Banner from "./Components/Banner/Banner";
import CartSection from "./Components/CartSection/CartSection";
import Navbar from "./Components/Navbar/Navbar";
import Rating from "./Components/Rating/Rating";





function App() {
  return (
    <>
    <Navbar></Navbar>
    <hr className="text-gray-200"/>
    <Banner></Banner>
    <Rating></Rating>
    <CartSection></CartSection>
    </>
  );
}

export default App;
