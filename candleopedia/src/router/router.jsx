import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../pages/shop/Cart";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import { ROUTES } from "../utility/constants";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.CART} element={<Cart />} />
      <Route path={ROUTES.LOGIN} element={<Login />} />
      <Route path={ROUTES.REGISTER} element={<Register />} />
    </Routes>
  );
};
export default AppRoutes;
