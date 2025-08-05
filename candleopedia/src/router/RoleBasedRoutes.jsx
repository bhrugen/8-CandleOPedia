function RoleBasedRoutes({ allowedRoles, children }) {
  return (
    <div className="container py-5" style={{ marginTop: "80px" }}>
      <div className="row justify-content-center">
        <div className="col-md-6 text-center">
          <div className="card border-danger">
            <div className="card-body p-5">
              <i
                className="bi bi-shield-exclamation text-danger"
                style={{ fontSize: "64px" }}
              ></i>
              <h1 className="text-danger mt-3">Access Denied</h1>
              <p className="text-muted mb-3">
                You don't have permission to access this page.
              </p>
              <div className="p-3 rounded mb-4">
                <p className="mb-1">
                  <strong>Your role:</strong>
                  <span className="badge bg-secondary">ROLE</span>
                </p>
                <p className="mb-0">
                  <strong>Required roles:</strong>

                  <span className="badge bg-primary">ALLOWED ROLES</span>
                </p>
              </div>
              <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                <button className="btn btn-secondary">
                  <i className="bi bi-arrow-left me-2"></i>
                  Go Back
                </button>
                <a href="#" className="btn btn-primary">
                  <i className="bi bi-house me-2"></i>
                  Go Home
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoleBasedRoutes;
