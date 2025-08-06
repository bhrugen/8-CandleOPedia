function OrderSuccess() {
  return (
    <div className="container py-5" style={{ marginTop: "80px" }}>
      <div className="row justify-content-center">
        <div className="col-md-8 text-center">
          <div className="card border-0 shadow-sm">
            <div className="card-body py-5">
              <i
                className="bi bi-check-circle text-success mb-3"
                style={{ fontSize: "64px" }}
              ></i>
              <h2 className="text-success mb-3">
                Order Submitted Successfully!
              </h2>
              <p className="lead mb-2">Your Order ID: #</p>
              <p className="text-muted mb-4">
                We'll contact you soon to process your payment and confirm your
                order.
              </p>
              <div className="d-flex justify-content-center gap-3">
                <a href="#" className="btn btn-primary">
                  <i className="bi bi-bag me-2"></i>View Orders
                </a>
                <a href="#" className="btn btn-outline-primary">
                  Continue Shopping
                </a>
              </div>
            </div>
          </div>

          <div className="alert alert-info mt-4">
            <p className="mb-0">
              <i className="bi bi-info-circle me-2"></i>
              We'll contact you within 24 hours to process your payment and
              confirm your order details.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderSuccess;
