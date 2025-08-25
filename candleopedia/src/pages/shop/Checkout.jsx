import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utility/constants";
import { useCreateOrderMutation } from "../../store/api/ordersApi";
function Checkout() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [createOrder] = useCreateOrderMutation();
  const { items, totalQuantity, totalAmount } = useSelector(
    (state) => state.cart
  );
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const handleOrderSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(e.target);

    try {
      const shippingInfo = {
        firstName: formData.get("firstName"),
        lastName: formData.get("lastName"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        address: formData.get("address"),
        city: formData.get("city"),
        state: formData.get("state"),
        zipCode: formData.get("zipCode"),
      };

      const orderData = {
        items,
        shippingInfo,
        totalAmount,
        userId: isAuthenticated ? user.id : null,
        userEmail: isAuthenticated ? user.email : null,
        totalItems: totalQuantity,
      };

      const result = await createOrder(orderData).unwrap();
      console.log(result);
      navigate(ROUTES.ORDER_SUCCESS, { state: { orderId: result.id } });
      //place order
    } catch (error) {
      console.error("Order submission error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container py-4">
      <h2 className="mb-4">Checkout</h2>

      <form onSubmit={handleOrderSubmit}>
        <div className="row">
          <div className="col-lg-8">
            <div className="card mb-4">
              <div className="card-header">
                <h5 className="mb-0">Shipping Information</h5>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">First Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="firstName"
                        defaultValue={
                          isAuthenticated && user?.displayName
                            ? user.displayName.split(" ")[0]
                            : ""
                        }
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Last Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="lastName"
                        defaultValue={
                          isAuthenticated && user?.displayName
                            ? user.displayName.split(" ").slice(1).join()
                            : ""
                        }
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        defaultValue={
                          isAuthenticated && user?.email ? user.email : ""
                        }
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Phone</label>
                      <input
                        type="tel"
                        className="form-control"
                        name="phone"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    name="address"
                    required
                  />
                </div>

                <div className="row">
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label className="form-label">City</label>
                      <input
                        type="text"
                        className="form-control"
                        name="city"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label className="form-label">State</label>
                      <input
                        type="text"
                        className="form-control"
                        name="state"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label className="form-label">ZIP Code</label>
                      <input
                        type="text"
                        className="form-control"
                        name="zipCode"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h5 className="mb-0">Order Summary</h5>
                <span className="badge bg-primary">{totalQuantity} items</span>
              </div>
              <div className="card-body">
                <div className="mb-3">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="d-flex justify-content-between align-items-center mb-3 pb-2 border-bottom"
                    >
                      <div className="flex-grow-1">
                        <h6 className="mb-1">{item.name}</h6>
                        <small className="text-muted">
                          ${item.price.toFixed(2)} each
                        </small>
                      </div>
                      <div className="text-end">
                        <div className="fw-bold">
                          ${(item.price * item.quantity).toFixed(2)}
                        </div>
                        <small className="text-muted">
                          Qty: {item.quantity}
                        </small>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pricing-breakdown">
                  <div className="d-flex justify-content-between mb-2">
                    <span>Shipping:</span>
                    <span className="text-success">Free</span>
                  </div>

                  <hr />
                  <div className="d-flex justify-content-between mb-3">
                    <strong className="fs-5">Total:</strong>
                    <strong className="fs-5 text-success">
                      ${totalAmount.toFixed(2)}
                    </strong>
                  </div>
                </div>
                <div className="d-grid gap-2">
                  <button
                    type="button"
                    onClick={() => navigate(ROUTES.CART)}
                    className="btn btn-outline-secondary"
                  >
                    Back to Cart
                  </button>
                  <button
                    type="submit"
                    className="btn btn-success"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <span
                          className="spinner-border spinner-border-sm me-2"
                          role="status"
                          aria-hidden="true"
                        ></span>
                        Processing Order...{" "}
                      </>
                    ) : (
                      `Submit Order - $${totalAmount.toFixed(2)}`
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div className="card my-4">
              <div className="card-header">
                <h5 className="mb-0">Payment Information</h5>
              </div>
              <div className="card-body">
                <div className="alert alert-info">
                  <div className="d-flex">
                    <i className="bi bi-info-circle me-3 mt-1"></i>
                    <small>
                      <strong>📞 We'll contact you for payment!</strong>
                      <br />
                      After submitting this order, our team will reach out to
                      arrange payment via:
                      <br />
                      • Cash on delivery (for local orders)
                      <br />
                      • Credit/debit card over phone
                      <br />
                      • Multiple payment options will be available
                      <br />
                      • Your order will be confirmed once payment is processed
                      <br />• No payment information is required at this time
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Checkout;
