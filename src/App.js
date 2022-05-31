import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import RequireAuth from "./components/auth/RequireAuth";
import Homepage from "./pages/Homepage";
import Products from "./pages/Products";
import Register from "./pages/Register";
import { QueryClient, QueryClientProvider } from "react-query";
import Dashboard from "./pages/Dashboard";
import Product from "./pages/Product";
import ProductInfo from "./components/ProductInfo";
import ProductConfigure from "./components/ProductConfigure";
import ProductReports from "./components/ProductReports";

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
            path="/"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          >
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<Product />}>
              <Route path="/products/:id/info" element={<ProductInfo />} />
              <Route
                path="/products/:id/configure"
                element={<ProductConfigure />}
              />
              <Route
                path="/products/:id/reports"
                element={<ProductReports />}
              />
            </Route>
          </Route>
        </Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
