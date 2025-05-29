import { Routes, Route } from "react-router-dom";
import { HomePage, ProductsList, ProductDetail, OrderPage, DashboardPage, PageNotFound} from "../pages";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { CartPage } from "../pages/Cart/CartPage";
import { ProtectedRoute } from "./ProtectedRoute";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="products" element={<ProductsList />} />
        <Route path="products/:id" element={<ProductDetail />}/>

        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        <Route path="cart" element={<ProtectedRoute><CartPage /></ProtectedRoute>} />
        <Route path="order-summary" element={<ProtectedRoute><OrderPage /></ProtectedRoute>} />
        <Route path="Dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />

        <Route path="/" element={<PageNotFound />} />

       
      </Routes>
    </>
  )
}
