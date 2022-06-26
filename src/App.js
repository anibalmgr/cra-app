import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import Homepage from "./pages/Homepage";
import Products from "./pages/Products";
import Register from "./pages/Register";
import { QueryClient, QueryClientProvider } from "react-query";
import Dashboard from "./pages/Dashboard";
import Product from "./pages/Product";
import ProductInfo from "./components/ProductInfo";
import ProductConfigure from "./components/ProductConfigure";
import ProductReports from "./components/ProductReports";
import Charts from "./pages/Charts";
import Notifications from "./pages/Notifications";
import Settings from "./pages/Settings";

export const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Dashboard />}>
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
            <Route path="/charts" element={<Charts />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
        </Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
