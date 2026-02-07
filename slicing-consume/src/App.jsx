import AllProductsContainer from "./containers/AllProductsContainer";
import HeaderContainer from "./containers/HeaderContainer"
import ProductContainer from "./containers/ProductContainer";
import EmailSubscribPage from "./pages/EmailSubscribePage";
import TestimonialPage from "./pages/TestimonialPage";
import Footer from "./components/Footer";

function App() {

  return (
    <>
      <HeaderContainer />
      <ProductContainer />
      <AllProductsContainer />
      <TestimonialPage />
      <EmailSubscribPage />
      <Footer />
    </>
  )
}

export default App
