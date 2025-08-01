function ProductForm() {
  return (
    <div
      className="modal show d-block"
      tabIndex="-1"
      style={{
        backgroundColor: "rgba(0,0,0,0.6)",
      }}
    >
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content border-0 shadow-lg">
          <form>
            <div className="modal-header bg-success border-0 p-4 ">
              <h5 className="modal-title">
                <i className={`bi bi-pencil-square me-2 `}></i>
                Add New Product
              </h5>
              <button type="button" className="btn-close"></button>
            </div>
            <div className="modal-body p-4">
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-4">
                    <label className="form-label">
                      <i className="bi bi-tag me-2 text-success"></i>
                      Product Name *
                    </label>
                    <input
                      type="text"
                      className={`form-control is-invalid`}
                      placeholder="Name..."
                      name="name"
                    />
                    <div className="invalid-feedback">ERROR</div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-4">
                    <label className="form-label">
                      <i className="bi bi-collection me-2 text-success"></i>
                      Flavors
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Flavors (comma separated)..."
                      name="flavor"
                    />
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <label className="form-label">
                  <i className="bi bi-file-text me-2 text-success"></i>
                  Description
                </label>
                <textarea
                  className="form-control"
                  rows={4}
                  placeholder="Enter product description..."
                  name="description"
                ></textarea>
              </div>

              <div className="row">
                <div className="col-md-4">
                  <div className="mb-4">
                    <label className="form-label">
                      <i className="bi bi-currency-dollar me-2 text-success"></i>
                      Price *
                    </label>
                    <div className="input-group">
                      <span className="input-group-text">$</span>
                      <input
                        type="number"
                        step="0.01"
                        className={`form-control is-invalid`}
                        placeholder="0.00"
                        name="price"
                        min="0"
                      />
                      <div className="invalid-feedback">ERROR</div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mb-4">
                    <label className="form-label">
                      <i className="bi bi-rulers me-2 text-success"></i>
                      Size *
                    </label>
                    <input
                      type="text"
                      className={`form-control is-invalid`}
                      placeholder="Size..."
                      name="size"
                    />

                    <div className="invalid-feedback">ERROR</div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mb-4">
                    <label className="form-label">
                      <i className="bi bi-boxes me-2 text-success"></i>
                      Stock Quantity *
                    </label>
                    <input
                      type="number"
                      className={`form-control is-invalid`}
                      placeholder="0"
                      name="stock"
                      min="0"
                    />
                    <div className="invalid-feedback">ERROR</div>
                  </div>
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">
                  <i className="bi bi-image me-2 text-success"></i>
                  Image URL
                </label>
                <input
                  type="url"
                  className="form-control"
                  placeholder="https://example.com/image.jpg"
                  value=""
                />
              </div>
            </div>
            <div className="modal-footer border-0 p-4">
              <button type="button" className="btn btn-outline-secondary px-4">
                <i className="bi bi-x-circle me-2"></i>
                Cancel
              </button>
              <button type="submit" className="btn btn-success px-4">
                <div
                  className="spinner-border spinner-border-sm me-2"
                  role="status"
                >
                  <span className="visually-hidden">Loading...</span>
                </div>
                Adding Product...
                <i className="bi bi-check-circle me-2"></i>
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProductForm;
