function OrderDetails() {
  return (
    <div
      className={`modal fade show d-block`}
      tabIndex="-1"
      style={{
        backgroundColor: "rgba(0,0,0,0.6)",
      }}
    >
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content border-0 shadow-lg">
          <div className="modal-header bg-info  border-0">
            <h5 className="modal-title fw-bold">
              <i className="bi bi-receipt me-2"></i>
              Order Details
              <span className="badge bg-success ms-2">Admin View</span>
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body p-3">
            <div className="row mb-3">
              <div className="col-md-6">
                <div className="card border-0">
                  <div className="card-body p-3">
                    <h6 className="card-title text-info mb-2">
                      <i className="bi bi-info-circle me-2"></i>
                      Order Information
                    </h6>
                    <p className="mb-1 small">
                      <strong>Order ID:</strong>
                      <code className="ms-2  px-2 py-1 rounded small">ID</code>
                    </p>
                    <p className="mb-1 small">
                      <strong>Date:</strong>
                      <span className="ms-2"></span>
                    </p>
                    <div className="mb-0">
                      <strong className="small">Status:</strong>
                      <select
                        name="status"
                        className="form-select form-select-sm d-inline-block ms-2"
                        style={{ width: "auto" }}
                        required
                      >
                        <option>STATUS</option>
                      </select>
                      <span className={`ms-2 badge `}>STATUS</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card border-0">
                  <div className="card-body p-3">
                    <h6 className="card-title text-success mb-2">
                      <i className="bi bi-person me-2"></i>
                      Customer Information
                    </h6>
                    <p className="mb-1 small">
                      <strong>Name:</strong>
                      <span className="ms-2"></span>
                    </p>
                    <p className="mb-1 small">
                      <strong>Email:</strong>
                      <span className="ms-2"></span>
                    </p>
                    <p className="mb-0 small">
                      <strong>Phone:</strong>
                      <span className="ms-2"></span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tracking Number and Shipping Address Section */}
            <div className="row mb-3">
              <div className="col-md-6">
                <div className="card border-0">
                  <div className="card-body p-3">
                    <h6 className="card-title text-primary mb-2">
                      <i className="bi bi-truck me-2"></i>
                      Tracking Information
                    </h6>
                    <div>
                      <input
                        type="text"
                        id="trackingNumber"
                        name="trackingNumber"
                        className="form-control form-control-sm"
                        placeholder="Enter tracking number..."
                      />
                    </div>
                    <div>
                      <label className="form-label small">
                        Tracking Number
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        value=""
                        disabled
                        readOnly
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card border-0">
                  <div className="card-body p-3">
                    <h6 className="card-title text-warning mb-2">
                      <i className="bi bi-geo-alt me-2"></i>
                      Shipping Address
                    </h6>
                    <address className="mb-0 small"></address>
                  </div>
                </div>
              </div>
            </div>

            <div className="card border-0">
              <div className="card-body p-3">
                <h6 className="card-title text-primary mb-2">
                  <i className="bi bi-bag me-2"></i>
                  Order Items
                </h6>
                <div className="table-responsive">
                  <table className="table table-sm mb-2">
                    <thead className="">
                      <tr>
                        <th className="small">Product</th>
                        <th className="small">Price</th>
                        <th className="small">Qty</th>
                        <th className="small">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="fw-medium small">NAME</td>
                        <td className="small">$$$</td>
                        <td>
                          <span className="badge bg-secondary small">
                            Quantity
                          </span>
                        </td>
                        <td className="fw-bold text-success small">
                          price * quantity
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="border-top pt-2">
                  <div className="row text-end">
                    <div className="col">
                      <h6 className="mb-0 text-success">
                        <strong>Total:</strong>
                        <span className="ms-2">$$ TOTAL</span>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer  border-0 p-3">
            <form className="d-flex w-100 justify-content-end gap-2">
              <button
                type="button"
                className="btn btn-outline-secondary btn-sm"
              >
                <i className="bi bi-x-circle me-1"></i>
                Close
              </button>
              <button type="submit" className="btn btn-success btn-sm">
                <>
                  <span
                    className="spinner-border spinner-border-sm me-1"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Updating...
                </>
                <>
                  <i className="bi bi-check-lg me-1"></i>
                  Save Changes
                </>
              </button>
            </form>
            <button
              type="button"
              className="btn btn-outline-secondary btn-sm px-4"
            >
              <i className="bi bi-x-circle me-1"></i>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderDetails;
