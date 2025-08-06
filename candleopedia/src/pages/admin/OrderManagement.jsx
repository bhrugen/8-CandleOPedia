import OrderTable from "../../components/orders/OrderTable";
import { useState } from "react";
import { useGetAllOrdersQuery } from "../../store/api/ordersApi";
import { toast } from "react-toastify";
function OrderManagement() {
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [orderSelected, setOrderSelected] = useState(null);

  const {
    data: orders = [],
    isLoading,
    isError,
    error,
  } = useGetAllOrdersQuery();

  const handleCloseModal = () => {
    setShowModal(false);
    setOrderSelected(null);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleEditOrder = (order) => {
    setShowModal(true);
    setOrderSelected(order);
    console.log(order);
  };

  const filteredOrders = orders.filter((order) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      order.id?.toLowerCase().includes(searchLower) ||
      order.shippingInfo?.firstName?.toLowerCase().includes(searchLower) ||
      order.shippingInfo?.lastName?.toLowerCase().includes(searchLower) ||
      order.shippingInfo?.email?.toLowerCase().includes(searchLower)
    );
  });

  return (
    <div className="py-4">
      <div className="container py-2">
        <div className="row">
          <div className="col-12">
            <div className="mb-4">
              <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
                <div>
                  <h1 className="display-6 fw-bold text-success mb-2">
                    <i className="bi bi-boxes me-3"></i>
                    Order Management
                  </h1>
                  <p className="text-muted mb-0">
                    Manage your order's with ease
                  </p>
                </div>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb mb-0  rounded-pill px-3 py-2 shadow-sm">
                    <li className="breadcrumb-item">
                      <label className="text-decoration-none text-success">
                        <i className="bi bi-house-door me-1"></i>Admin
                      </label>
                    </li>
                    <li
                      className="breadcrumb-item active fw-medium"
                      aria-current="page"
                    >
                      Orders
                    </li>
                  </ol>
                </nav>
              </div>
            </div>

            <div className="card border-0 shadow-sm mb-4">
              <div className="card-body">
                <div className="row align-items-center">
                  <div className="col-md-8">
                    <div className="input-group">
                      <span className="input-group-text border-end-0">
                        <i className="bi bi-search text-muted"></i>
                      </span>
                      <input
                        type="text"
                        className="form-control border-start-0 ps-0"
                        placeholder="Search order..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                      />
                      {searchTerm && (
                        <button
                          className="btn btn-outline-secondary border-start-0"
                          type="button"
                          title="Clear search"
                          onClick={() => setSearchTerm("")}
                        >
                          <i className="bi bi-x"></i>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card border-0 shadow-lg">
              <div className="card-body p-4">
                {isLoading ? (
                  <div className="text-center py-5">
                    <div className="spinner-border text-success" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                    <p className="mt-3 text-muted">Loading orders...</p>
                  </div>
                ) : isError ? (
                  <div className="text-center py-5">
                    <div className="alert alert-danger" role="alert">
                      <i className="bi bi-exclamation-triangle me-2"></i>
                      Error loading orders:
                    </div>
                  </div>
                ) : filteredOrders.length == 0 ? (
                  <div className="text-center py-5">
                    <i className="bi bi-box-seam fs-1 text-muted mb-3 d-block"></i>
                    <h5 className="text-muted mb-2">No orders found</h5>
                    <p className="text-muted mb-3">No orders found</p>
                  </div>
                ) : (
                  <div>
                    <OrderTable
                      orders={filteredOrders}
                      onViewOrder={handleEditOrder}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderManagement;
