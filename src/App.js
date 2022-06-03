import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from "./pages/login";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";

function App({cart}) {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Suspense fallback={<div className="loader">Loading..</div>}>
            <Login />
          </Suspense>
          }>
          </Route>

          <Route path="/Home" element={<Suspense fallback={<div className="loader">Loading..</div>}>
            <Home />
          </Suspense>
          }></Route>
          <Route path="/productList" element={<Suspense fallback={<div className="loader">Loading..</div>}>
          <ProductList/>
        </Suspense>
        }></Route>
        <Route path="/productDetails" element={<Suspense fallback={<div className="loader">Loading..</div>}>
       <ProductDetails />
      </Suspense>
      }></Route>
      <Route path="/Cart" element={<Suspense fallback={<div className="loader">Loading..</div>}>
     <Cart/>
     </Suspense>
     }></Route>


        </Routes>
      </Router>
    </div>
  );
}





export default App;