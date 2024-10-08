import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import Register from "./pages/register";
import Login from "./pages/login";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./pages/user/dashboard";
import PrivateRoute from "./components/routes/PrivateRoute";
import ForgotPassword from "./pages/ForgotPassword";
import AdminRoute from "./components/routes/AdminRoutes";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import CreateCategory from "./pages/Admin/CreateCategory";
import CreateProducts from "./pages/Admin/CreateProducts";
import User from "./pages/Admin/User";
import Orders from "./pages/user/Orders";
import Profile from "./pages/user/Profile";
import Products from "./pages/Admin/Products";
import UpdateProducts from "./pages/Admin/UpdateProducts";
import Search from "./pages/Search";
import ProductDetails from "./pages/ProductDetails";
import Categories from "./pages/Categories";
import CategoryProducts from "./pages/CategoryProducts";
import CartPage from "./pages/CartPage";
import AdminOrders from "./pages/Admin/AdminOrders";
import "./App.css";
import AOS from 'aos';

import { useEffect } from "react";
import PendingOrders from "./pages/Admin/pendingOrders";
import CanceledOrders from "./pages/Admin/cancelledOrders";
import DeliveredOrders from "./pages/Admin/deliveredOrders";
import ShippedOrders from "./pages/Admin/shippedOrders";
import Privacy_Policy from "./components/Privacy&Policy/Privacy_Policy";
import Return_RefundPolicy from "./components/Return&RefundPolicy/Return_RefundPolicy";
import ShippingPolicy from "./components/ShippingPolicy/ShippingPolicy";
import TermsAndConditions from "./components/TermsAndConditions/TermsAndConditions";

function App() {
  useEffect(() => {
    AOS.init();
  },[])

  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/product/:slug" element={<ProductDetails />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/category/:slug" element={<CategoryProducts />} />
        <Route path="/search" element={<Search />} />
        <Route path="/register" element={<Register />} />
        <Route path="/privacy-policy" element={<Privacy_Policy />} />
        <Route path="/return-refund-policy" element={<Return_RefundPolicy />} />
        <Route path="/shipping-policy" element={<ShippingPolicy />} />
        <Route path="/terms-conditions" element={<TermsAndConditions />} />
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="user/orders" element={<Orders />} />
          <Route path="user/profile" element={<Profile />} />
        </Route>
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/create-category" element={<CreateCategory />} />
          <Route path="admin/create-product" element={<CreateProducts />} />
          <Route path="admin/product/:slug" element={<UpdateProducts />} />
          <Route path="admin/products" element={<Products />} />
          <Route path="admin/users" element={<User />} />
          <Route path="admin/orders" element={<AdminOrders />} />
          <Route path="admin/pending" element={<PendingOrders />} />
          <Route path="admin/canceled" element={<CanceledOrders />} />
          <Route path="admin/delivered" element={<DeliveredOrders />} />
          <Route path="admin/shipped" element={<ShippedOrders />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
