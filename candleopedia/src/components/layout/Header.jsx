import { ROUTES } from "../../utility/constants";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearUser } from "../../store/slice/authSlice";
import { useLogoutUserMutation } from "../../store/api/authApi";
function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.totalQuantity);
  const { isAuthenticated, isInitialized, isAdmin, user } = useSelector(
    (state) => state.auth
  );
  const [logoutUser] = useLogoutUserMutation();

  const handleLogout = async () => {
    try {
      await logoutUser();
      navigate(ROUTES.HOME);
    } catch (error) {
      dispatch(clearUser());
      navigate(ROUTES.HOME);
    }
  };

  return (
    <nav className="navbar navbar-expand-sm pt-3 border-bottom shadow-sm">
      <div className="container">
        <Link
          className="navbar-brand fw-bold d-flex align-items-center text-success"
          to={ROUTES.HOME}
        >
          <div
            className="me-2 bg-success rounded-2 d-flex align-items-center justify-content-center"
            style={{ width: "32px", height: "32px" }}
          >
            <i className="bi bi-gem text-white"></i>
          </div>
          CandleOPedia
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item me-4">
              <Link
                className="nav-link position-relative btn btn-outline-success rounded-pill px-3 border-2"
                to={ROUTES.CART}
                style={{
                  borderWidth: "2px",
                  borderStyle: "solid",
                  transition: "all 0.3s ease",
                }}
              >
                <i className="bi bi-bag me-2"></i>Cart
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cartItems}
                </span>
              </Link>
            </li>

            <li className="nav-item me-3">
              <button className="btn btn-outline-secondary rounded-pill px-3">
                <i className="bi bi-sun"></i>
              </button>
            </li>

            {!isInitialized ? (
              <li className="nav-item">
                <span className="nav-link disabled">
                  <div className="d-flex align-items-center">
                    <div
                      className="spinner-border spinner-border-sm me-2"
                      role="status"
                      aria-hidden="true"
                    ></div>
                    <span>Loading...</span>
                  </div>
                </span>
              </li>
            ) : isAuthenticated ? (
              <li className="nav-item dropdown">
                <button
                  className="nav-link dropdown-toggle btn btn-link"
                  type="button"
                  id="navbarDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="bi bi-person me-1"></i>
                  {user?.displayName || user?.email}
                </button>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdown"
                  style={{ minWidth: "200px" }}
                >
                  <li>
                    <Link className="dropdown-item" to={ROUTES.MY_ORDER}>
                      <i className="bi bi-cart me-2"></i>
                      My Orders
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  {isAdmin && (
                    <>
                      <li>
                        <Link
                          className="dropdown-item"
                          to={ROUTES.ADMIN.PRODUCTS}
                        >
                          <i className="bi bi-box me-2"></i>
                          Manage Products
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to={ROUTES.ADMIN.ORDERS}
                        >
                          <i className="bi bi-clipboard-data me-2"></i>
                          Manage Orders
                        </Link>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                    </>
                  )}

                  <li>
                    <button className="dropdown-item" onClick={handleLogout}>
                      <i className="bi bi-box-arrow-right me-2"></i>
                      Logout
                    </button>
                  </li>
                </ul>
              </li>
            ) : (
              <>
                <li className="nav-item me-2">
                  <Link className="nav-link px-4 py-2" to={ROUTES.LOGIN}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link px-0 py-2" to={ROUTES.REGISTER}>
                    Sign Up
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
