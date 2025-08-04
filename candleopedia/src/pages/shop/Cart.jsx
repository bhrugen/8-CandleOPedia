import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utility/constants";
import {
  removeFromCart,
  updateCart,
  clearCart,
} from "../../store/slice/cartSlice";
function Cart() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleQuantityChange = (id, newQuantity) => {
    //update func
    if (newQuantity > 0) {
      dispatch(updateCart({ id, quantity: parseInt(newQuantity) }));
    } else {
      handleRemoveItem(id);
    }
  };

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart({ id }));
  };

  const handleClearCart = (id) => {
    dispatch(clearCart());
  };

  const { items, totalQuantity, totalAmount } = useSelector(
    (state) => state.cart
  );

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Shopping Cart ({totalQuantity} items)</h2>
        <button className="btn btn-outline-danger" onClick={handleClearCart}>
          Clear Cart
        </button>
      </div>

      <div className="row">
        {items.length === 0 ? (
          <div className="col-12">
            <div className="card text-center py-5">
              <div className="card-body">
                <i
                  className="bi bi-cart-x"
                  style={{ fontSize: "4rem", color: "#6c757d" }}
                ></i>
                <h3 className="mt-3 mb-2">Your cart is empty</h3>
                <p className="text-muted mb-4">
                  Add some candles to your cart to get started!
                </p>
                <Link to={ROUTES.HOME} className="btn btn-primary">
                  <i className="bi bi-arrow-left me-2"></i>
                  Start Shopping
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="col-lg-8">
              <div className="card">
                <div className="card-body p-0">
                  <div className="table-responsive">
                    <table className="table mb-0">
                      <thead className="bg-dark">
                        <tr>
                          <th>Product</th>
                          <th>Price</th>
                          <th>Quantity</th>
                          <th>Total</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {items.map((item) => (
                          <tr key={item.id}>
                            <td>
                              <div className="d-flex align-items-center">
                                <img
                                  src={
                                    item.imageUrl ||
                                    "https://placehold.co/60x60?text=No+Image"
                                  }
                                  className="me-3"
                                  style={{
                                    width: "60px",
                                    height: "60px",
                                    objectFit: "cover",
                                  }}
                                />
                                <div>
                                  <h6 className="mb-0">{item.name}</h6>
                                  <div className="d-flex flex-column gap-1 mt-1">
                                    <small className="text-muted d-flex flex-wrap gap-1">
                                      <span className="badge text-secondary">
                                        {item.flvaor}
                                      </span>
                                    </small>
                                    <small className="text-muted">
                                      <span className="badge bg-secondary">
                                        {item.size}
                                      </span>
                                    </small>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td>${item.price.toFixed(2)}</td>
                            <td>
                              <input
                                type="number"
                                className="form-control"
                                min="1"
                                value={item.quantity}
                                onChange={(e) =>
                                  handleQuantityChange(item.id, e.target.value)
                                }
                                style={{ width: "80px" }}
                              />
                            </td>
                            <td> ${(item.price * item.quantity).toFixed(2)}</td>
                            <td>
                              <button
                                className="btn btn-outline-danger btn-sm"
                                onClick={() => handleRemoveItem(item.id)}
                              >
                                <i className="bi bi-trash"></i>
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="mt-3">
                <a href="/">
                  <button className="btn btn-outline-success">
                    <i className="bi bi-arrow-left me-2"></i>
                    Continue Shopping
                  </button>
                </a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card">
                <div className="card-header">
                  <h5 className="mb-0">Order Summary</h5>
                </div>
                <div className="card-body">
                  <div className="d-flex justify-content-between mb-2">
                    <span>Subtotal ({totalQuantity} items):</span>
                    <span>${totalAmount.toFixed(2)}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span>Shipping:</span>
                    <span>Free</span>
                  </div>

                  <hr />
                  <div className="d-flex justify-content-between mb-3">
                    <strong>Total:</strong>
                    <strong>${totalAmount.toFixed(2)}</strong>
                  </div>

                  <button
                    className="btn btn-success w-100"
                    onClick={() => navigate(ROUTES.CHECKOUT)}
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
