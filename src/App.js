import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import RequireAuth from "./components/auth/RequireAuth";
import Homepage from "./pages/Homepage";
import Product from "./pages/Product";
import Products from "./pages/Products";
import ProductInfo from "./components/ProductInfo";
import Register from "./pages/Register";
import { QueryClient, QueryClientProvider } from "react-query";

export const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/products"
            element={
              <RequireAuth>
                <Products />
              </RequireAuth>
            }
          >
            <Route
              path=":id"
              element={
                <RequireAuth>
                  <Product />
                </RequireAuth>
              }
            >
              <Route path=":id/info" element={<ProductInfo />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
