import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductsGrid from "./components/ProductsGrid";
import Cart from "./components/Cart";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NotFound from "./components/NotFound";
import { getProducts } from "./service/apiService";

//main/root comonent
function App() {
  const [products, setProducts] = useState([]); //// products is a state variable and setProducts is function which sets the state
  const [cart, setCart] = useState("");

  //Adding product to the cart
  const addProductToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };
  //useEffect hook used to load the data from file/backend api
  useEffect(() => {
    //async call
    getProducts()
      .then((response) => {
        setProducts(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  //return JSX
  return (
    <div>
      <div className="container">
        <Header></Header>
      </div>
      <div>
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/cart">Cart</Link>
              </li>
              <li>
                <Link to="/sari">Sarees</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route
              path="/"
              element={
                <ProductsGrid
                  products={products}
                  addProductToCart={addProductToCart}
                ></ProductsGrid>
              }
            ></Route>
            {/* <Route path="/sari" element={<Sari products={cart}></Sari>}></Route> */}
            <Route path="/cart" element={<Cart products={cart}></Cart>}></Route>
            <Route path="*" element={<NotFound></NotFound>}></Route>
          </Routes>
        </Router>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}
export default App;
