import "./App.css";
import "@google/model-viewer/dist/model-viewer.min.js";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ProductList from "./components/ProductList/ProductList";

import ErrorPage from "./components/ErrorPage/ErrorPage";

import Header from "./components/Header/Header";


const App = () => {
  return (
    <>
    <BrowserRouter>

    <Header />
      <Routes>
        <Route path="/" element={<ProductList />} />
      
     
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      
  </BrowserRouter>

      </>
  );
};

export default App;
