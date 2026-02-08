import AllProductsContainer from "./containers/AllProductsContainer";
import HeaderContainer from "./containers/HeaderContainer"
import ProductContainer from "./containers/ProductContainer";
import EmailSubscribePage from "./pages/EmailSubscribePage";
import Footer from "./components/Footer";
import TestimonialContainer from "./containers/TestimonialContainer";

function App() {

  return (
    <>
      <HeaderContainer />
      <ProductContainer />
      <AllProductsContainer />
      <TestimonialContainer />
      <EmailSubscribePage />
      <Footer />
    </>
  )
}

export default App
