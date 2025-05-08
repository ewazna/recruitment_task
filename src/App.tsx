import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { PreviousItemPageProvider } from "./shared/PreviousItemPage/PreviousItemPageProvider";
import HomePage from "./pages/HomePage/HomePage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import ProductItemPage from "./pages/ProductItemPage/ProductItemPage";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <BrowserRouter>
      <PreviousItemPageProvider>
        <Routes>
          <Route element={<NavBar />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:productId" element={<ProductItemPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </PreviousItemPageProvider>
    </BrowserRouter>
  );
}

export default App;
