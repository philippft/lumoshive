import AllProductsContainer from "./containers/AllProductsContainer";
import HeaderContainer from "./containers/HeaderContainer"
import ProductContainer from "./containers/ProductContainer";
import EmailSubscribeContainer from "./containers/EmailSubscribeContainer";
import Footer from "./components/Footer";
import TestimonialContainer from "./containers/TestimonialContainer";

function App() {

  return (
    <>
      <HeaderContainer />
      <ProductContainer />
      <AllProductsContainer />
      <TestimonialContainer />
      <EmailSubscribeContainer />
      <Footer />
    </>
  )
}

export default App
