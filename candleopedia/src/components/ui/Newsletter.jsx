function Newsletter() {
  return (
    <section className=" py-5">
      <div className="container">
        <div className="text-center">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2 className="display-6 fw-bold  mb-3">
                <i className="bi bi-envelope-heart me-3 text-success"></i>
                Stay Updated
              </h2>
              <p className="text-muted fs-5 mb-4">
                Subscribe to our newsletter for the latest deals, new arrivals,
                and exclusive offers
              </p>
              <div className="row justify-content-center">
                <div className="col-md-8">
                  <div className="d-flex gap-2">
                    <input
                      type="email"
                      className="form-control form-control-lg rounded-3 border-2"
                      placeholder="Enter your email address"
                    />
                    <button className="btn btn-success btn-lg px-4 rounded-3 fw-semibold">
                      <i className="bi bi-send me-2"></i>Subscribe
                    </button>
                  </div>
                  <small className="text-muted d-block mt-2">
                    <i className="bi bi-shield-check me-1"></i>
                    We respect your privacy. Unsubscribe anytime.
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
