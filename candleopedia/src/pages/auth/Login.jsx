import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useLoginUserMutation } from "../../store/api/authApi";
import { ROUTES } from "../../utility/constants";
import { setUser } from "../../store/slice/authSlice";
function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [loginUser] = useLoginUserMutation();
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const newErrors = {};

      if (!formData.email.trim()) {
        newErrors.email = "Email is required";
      }
      if (!formData.password.trim()) {
        newErrors.password = "Password is required";
      }

      setErrors(newErrors);

      if (Object.keys(newErrors).length > 0) {
        setIsLoading(false);
        return;
      }

      //valid

      //registeration
      const result = await loginUser(formData).unwrap();
      console.log(result);

      const from = location.state?.from?.pathname || ROUTES.HOME;
      navigate(from);
    } catch (error) {
      toast.error(error);
    } finally {
      setIsLoading(false);
    }
  };
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
                  <h1 className="h3 mb-2 fw-bold">Welcome Back!</h1>
                  <p className="text-muted">Sign in to your account</p>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className={`form-control ${
                        errors.email ? "is-invalid" : ""
                      }`}
                      value={formData.email}
                      onChange={handleInputChange}
                      id="email"
                      name="email"
                      placeholder="name@example.com"
                    />
                    <label htmlFor="email">
                      <i className="bi bi-envelope me-2"></i>Email Address
                    </label>
                    <div className="invalid-feedback">{errors.email}</div>
                  </div>

                  <div className="form-floating mb-4">
                    <input
                      type="password"
                      className={`form-control ${
                        errors.password ? "is-invalid" : ""
                      }`}
                      value={formData.password}
                      onChange={handleInputChange}
                      id="password"
                      name="password"
                      placeholder="Password"
                    />
                    <label htmlFor="password">
                      <i className="bi bi-lock me-2"></i>Password
                    </label>
                    <div className="invalid-feedback">{errors.password}</div>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-success w-100 mb-4 py-3"
                  >
                    {isLoading ? (
                      <>
                        <span
                          className="spinner-border spinner-border-sm me-2"
                          role="status"
                          aria-hidden="true"
                        ></span>
                        Signing In...
                      </>
                    ) : (
                      <>
                        {" "}
                        <i className="bi bi-box-arrow-in-right me-2"></i>
                        Sign In
                      </>
                    )}
                  </button>

                  <div className="text-center">
                    <p className="mb-0 text-muted">
                      Don't have an account?{" "}
                      <Link
                        to={ROUTES.REGISTER}
                        className="text-success fw-semibold text-decoration-none"
                      >
                        Create account
                      </Link>
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

export default Login;
