function Cart() {
  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Shopping Cart (XX items)</h2>
        <button className="btn btn-outline-danger">Clear Cart</button>
      </div>

      <div className="row">
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
              <a href="/" className="btn btn-primary">
                <i className="bi bi-arrow-left me-2"></i>
                Start Shopping
              </a>
            </div>
          </div>
        </div>
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
                    <tr>
                      <td colSpan="5" className="text-center py-4">
                        <div className="text-muted">
                          <i
                            className="bi bi-cart-x"
                            style={{ fontSize: "2rem" }}
                          ></i>
                          <p className="mt-2 mb-0">Your cart is empty</p>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <img
                            src="https://placehold.co/60x60?text=No+Image"
                            className="me-3"
                            style={{
                              width: "60px",
                              height: "60px",
                              objectFit: "cover",
                            }}
                          />
                          <div>
                            <h6 className="mb-0">NAME</h6>
                            <div className="d-flex flex-column gap-1 mt-1">
                              <small className="text-muted d-flex flex-wrap gap-1">
                                <span className="badge text-secondary">
                                  FLVAOR
                                </span>
                              </small>
                              <small className="text-muted">
                                <span className="badge bg-secondary">SIZE</span>
                              </small>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>PRICE</td>
                      <td>
                        <input
                          type="number"
                          className="form-control"
                          min="1"
                          style={{ width: "80px" }}
                        />
                      </td>
                      <td>$PRICE * QUANTITY</td>
                      <td>
                        <button className="btn btn-outline-danger btn-sm">
                          <i className="bi bi-trash"></i>
                        </button>
                      </td>
                    </tr>
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
                <span>Subtotal (XX items):</span>
                <span>$SUBTOTAL</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Shipping:</span>
                <span>Free</span>
              </div>

              <hr />
              <div className="d-flex justify-content-between mb-3">
                <strong>Total:</strong>
                <strong>$TOTAL</strong>
              </div>

              <button className="btn btn-success w-100">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
