import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../pages/shop/Cart";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Checkout from "../pages/shop/Checkout";
import { ROUTES, ROLES } from "../utility/constants";
import ProductManagement from "../pages/admin/ProductManagement";
import OrderManagement from "../pages/admin/OrderManagement";
import MyOrders from "../pages/order/MyOrders";
import RoleBasedRoutes from "./RoleBasedRoutes";
import OrderSuccess from "../pages/order/OrderSuccess";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route
        path={ROUTES.CART}
        element={
          <RoleBasedRoutes>
            <Cart />
          </RoleBasedRoutes>
        }
      />
      <Route
        path={ROUTES.CHECKOUT}
        element={
          <RoleBasedRoutes>
            <Checkout />
          </RoleBasedRoutes>
        }
      />
      <Route path={ROUTES.LOGIN} element={<Login />} />
      <Route path={ROUTES.ORDER_SUCCESS} element={<OrderSuccess />} />
      <Route path={ROUTES.REGISTER} element={<Register />} />
      <Route
        path={ROUTES.ADMIN.PRODUCTS}
        element={
          <RoleBasedRoutes allowedRoles={[ROLES.ADMIN, "SuperAdmin"]}>
            <ProductManagement />
          </RoleBasedRoutes>
        }
      />
      <Route
        path={ROUTES.ADMIN.ORDERS}
        element={
          <RoleBasedRoutes allowedRoles={[ROLES.ADMIN, "SuperAdmin"]}>
            <OrderManagement />
          </RoleBasedRoutes>
        }
      />

      <Route
        path={ROUTES.MY_ORDER}
        element={
          <RoleBasedRoutes>
            <MyOrders />
          </RoleBasedRoutes>
        }
      />
    </Routes>
  );
};
export default AppRoutes;
