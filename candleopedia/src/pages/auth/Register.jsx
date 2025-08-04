function Register() {
  return (
    <div className="pt-5 d-flex align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6 col-xl-5">
            <div className="card shadow border-0">
              <div className="card-body p-5">
                <div className="text-center mb-4">
                  <div
                    className="d-inline-flex align-items-center justify-content-center bg-success rounded-circle mb-3"
                    style={{ width: "60px", height: "60px" }}
                  >
                    <i className="bi bi-gem  fs-4"></i>
                  </div>
                  <h1 className="h3 mb-2 fw-bold">Create Account</h1>
                  <p className="text-muted">Join us and start shopping today</p>
                </div>
                <div
                  className="alert alert-danger alert-dismissible fade show"
                  role="alert"
                >
                  <i className="bi bi-exclamation-triangle-fill me-2"></i>
                  ERROR
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                  ></button>
                </div>

                <form>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className={`form-control is-invalid`}
                      id="displayName"
                      name="displayName"
                      placeholder="Full Name"
                    />
                    <label htmlFor="displayName">
                      <i className="bi bi-person me-2"></i>Full Name
                    </label>
                    <div className="invalid-feedback">ERROR</div>
                  </div>

                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className={`form-control is-invalid`}
                      id="email"
                      name="email"
                      placeholder="name@example.com"
                    />
                    <label htmlFor="email">
                      <i className="bi bi-envelope me-2"></i>Email Address
                    </label>
                    <div className="invalid-feedback">ERROR</div>
                  </div>

                  <div className="form-floating mb-4">
                    <input
                      type="password"
                      className={`form-control is-invalid`}
                      id="password"
                      name="password"
                      placeholder="Password"
                      minLength="6"
                    />
                    <label htmlFor="password">
                      <i className="bi bi-lock me-2"></i>Password
                    </label>
                    <div className="invalid-feedback">ERROR</div>
                  </div>

                  <button type="submit" className="btn btn-success w-100 mb-4">
                    <span
                      className="spinner-border spinner-border-sm me-2"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    Creating Account...
                    <i className="bi bi-person-plus me-2"></i>
                    Create Account
                  </button>

                  <div className="text-center">
                    <p className="mb-0 text-muted">
                      Already have an account?
                      <a
                        href="#"
                        className="text-success fw-semibold text-decoration-none"
                      >
                        Sign in here
                      </a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
