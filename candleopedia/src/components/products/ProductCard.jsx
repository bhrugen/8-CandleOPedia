function ProductCard() {
  return (
    <div
      className="card product-card h-100 border shadow rounded-3 overflow-hidden clickable"
      role="button"
    >
      <div className="position-relative">
        <div style={{ height: "260px" }} className="">
          <img
            src="https://placehold.co/300"
            className="product-image img-fluid w-100 h-100 object-fit-cover"
          />
        </div>

        <span className="position-absolute top-0 start-0 m-3 badge rounded-pill bg-warning fw-semibold px-3 py-2">
          <i className="bi bi-exclamation-triangle-fill me-1"></i>
          Low Stock
        </span>

        <button
          className="btn btn-outline-success position-absolute top-0 end-0 m-3 rounded-circle border-2 d-flex align-items-center justify-content-center"
          style={{ width: "45px", height: "45px" }}
          title="Quick View"
        >
          <i className="bi bi-eye-fill fs-5"></i>
        </button>
      </div>

      <div className="card-body p-4 d-flex flex-column">
        <h5 className="card-title fw-bold mb-2 text-truncate">NAME</h5>

        <p
          className="card-text text-muted mb-3"
          style={{
            fontSize: "0.9rem",
            display: "-webkit-box",
            WebkitLineClamp: "3",
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          DESCRIPTION
        </p>

        <div className="mb-3">
          <div className="d-flex flex-wrap gap-2 mb-2">
            <span className="badge bg-success bg-opacity-10 text-success fw-semibold px-3 py-1 rounded-pill border border-success">
              FLAVOR
            </span>
            <span className="badge fw-medium px-3 py-1 rounded-pill">Size</span>
          </div>
        </div>

        <div className="d-flex align-items-center justify-content-between mb-3">
          <div className="d-flex align-items-center text-muted">
            <i className="bi bi-box me-2"></i>
            <span className="small fw-medium">00 available</span>
          </div>
          <h4 className="mb-0 fw-bold text-success">PRICE</h4>
        </div>

        <div className="mt-auto">
          <button
            className={`btn w-100 fw-semibold py-3 rounded-3 shadow-sm btn-success`}
          >
            <i className={`bi bi-bag-plus me-2`}></i>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
