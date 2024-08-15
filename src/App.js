import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductsGrid from "./components/ProductsGrid";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <ProductsGrid></ProductsGrid>
      <Footer></Footer>
    </div>
  );
}
export default App;
