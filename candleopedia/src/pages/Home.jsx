import ProductCard from "../components/products/ProductCard";
import ProductDetailsModal from "../components/products/ProductDetailsModal";

function Home() {
  return (
    <div className="container my-5">
      <section className="rounded-4 p-4 mb-5">
        <div className="text-center mb-4">
          <h2 className="display-6 fw-bold mb-3">Find Your Perfect Product</h2>
          <p className="text-muted fs-5">
            Search through our curated collection of premium items
          </p>
        </div>
        <div
          className="card border shadow mx-auto"
          style={{ maxWidth: "1000px" }}
        >
          <div className="card-body p-4 border rounded">
            <div className="row g-3 align-items-end">
              <div className="col-lg-8 col-md-7">
                <label className="form-label fw-semibold ">
                  Search Products
                </label>
                <div className="position-relative">
                  <input
                    type="text"
                    className="form-control form-control-lg ps-5 rounded-pill"
                    placeholder="What are you looking for?"
                  />
                  <i className="bi bi-search position-absolute start-0 top-50 translate-middle-y ms-3 text-muted"></i>
                </div>
              </div>
              <div className="col-lg-4 col-md-5">
                <label className="form-label fw-semibold ">Flavor</label>
                <select className="form-select form-select-lg rounded-pill">
                  <option value="">All Flavors</option>
                </select>
              </div>
            </div>

            <div className="row g-3 mt-2">
              <div className="col-md-8">
                <div className="d-flex align-items-center">
                  <span className="text-muted me-3">
                    <i className="bi bi-funnel me-1"></i>2 of 12 products
                    matching your criteria
                  </span>

                  <button className="btn btn-outline-secondary btn-sm rounded-pill">
                    <i className="bi bi-x me-1"></i>
                    Clear Filters
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="my-5" />

      <section className=" rounded-4 p-4 mb-5">
        <div className="text-center mb-4">
          <h2 className="display-5 fw-bold mb-3">Our Products</h2>
          <p className="text-muted fs-5">
            Discover our complete collection of premium products, each crafted
            with care and designed to elevate your experience. From unique
            flavors to exquisite sizes, find the perfect match for your needs.
          </p>
        </div>

        <div className="text-center py-5">
          <div className="spinner-border text-success" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-3 text-muted">Loading products...</p>
        </div>

        <div className="alert alert-danger text-center" role="alert">
          <i className="bi bi-exclamation-triangle me-2"></i>
          Error loading products. Please try again later.
        </div>

        <div className="text-center py-5">
          <i className="bi bi-search text-muted display-1"></i>
          <p className="mt-3 text-muted fs-5">
            No products found matching your search criteria.
          </p>
          <p className="text-muted">
            Try adjusting your search terms or filters.
          </p>
          <button className="btn btn-outline-success mt-2 rounded-pill">
            <i className="bi bi-arrow-clockwise me-1"></i>
            Clear All Filters
          </button>
        </div>

        <div className="text-center py-5">
          <i className="bi bi-box text-muted display-1"></i>
          <p className="mt-3 text-muted fs-5">
            No products available at the moment.
          </p>
        </div>

        <div className="row g-4">
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 ">
            <ProductCard />
          </div>
        </div>
      </section>

      <hr className="my-5" />
    </div>
  );
}

export default Home;
