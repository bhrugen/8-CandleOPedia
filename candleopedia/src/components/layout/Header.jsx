function Header() {
  return (
    <nav className="navbar navbar-expand-sm pt-3 border-bottom shadow-sm">
      <div className="container">
        <a
          className="navbar-brand fw-bold d-flex align-items-center text-success"
          href="/"
        >
          <div
            className="me-2 bg-success rounded-2 d-flex align-items-center justify-content-center"
            style={{ width: "32px", height: "32px" }}
          >
            <i className="bi bi-gem text-white"></i>
          </div>
          CandleOPedia
        </a>

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
              <a
                className="nav-link position-relative btn btn-outline-success rounded-pill px-3 border-2"
                href="/cart"
                style={{
                  borderWidth: "2px",
                  borderStyle: "solid",
                  transition: "all 0.3s ease",
                }}
              >
                <i className="bi bi-bag me-2"></i>Cart
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  0
                </span>
              </a>
            </li>

            <li className="nav-item me-3">
              <button className="btn btn-outline-secondary rounded-pill px-3">
                <i className="bi bi-sun"></i>
              </button>
            </li>

            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle btn btn-link"
                type="button"
                id="navbarDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="bi bi-person me-1"></i>
                User
              </button>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdown"
                style={{ minWidth: "200px" }}
              >
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="bi bi-cart me-2"></i>
                    My Orders
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="bi bi-box me-2"></i>
                    Manage Products
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="bi bi-clipboard-data me-2"></i>
                    Manage Orders
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <button className="dropdown-item">
                    <i className="bi bi-box-arrow-right me-2"></i>
                    Logout
                  </button>
                </li>
              </ul>
            </li>

            <li className="nav-item me-2">
              <a className="nav-link px-4 py-2" href="#">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-0 py-2" href="#">
                Sign Up
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
