import { ORDER_STATUS } from "../../utility/constants";
function OrderTable({ orders = [], onViewOrder }) {
  return (
    <div className="card border-0 shadow-sm">
      <div className="card-header border-0 py-3">
        <h5 className="card-title mb-0">
          <i className="bi bi-list-ul me-2 text-success"></i>
          Orders List ({orders.length})
        </h5>
      </div>
      <div className="card-body p-0">
        <div className="table-responsive">
          <table className="table table-hover mb-0">
            <thead className="">
              <tr>
                <th className="border-0 ps-4">Order ID</th>
                <th className="border-0">Customer Details</th>
                <th className="border-0">Date & Time</th>
                <th className="border-0">Items</th>
                <th className="border-0">Total</th>
                <th className="border-0">Status</th>
                <th className="border-0 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-0">
                  <td className="ps-4 py-3">
                    <code className="rounded text-primary">{order.id}</code>
                  </td>
                  <td className="py-3">
                    <div>
                      <h6 className="mb-1 fw-bold ">
                        {order.shippingInfo?.firstName}{" "}
                        {order.shippingInfo?.lastName}
                      </h6>
                      <p
                        className="text-muted mb-0 small"
                        style={{ maxWidth: "200px" }}
                      >
                        <i className="bi bi-envolope me-1"></i>
                        {order.shippingInfo?.email}
                      </p>
                    </div>
                  </td>
                  <td className="py-3">
                    <div className="text-muted">
                      <div>
                        <i className="bi bi-calendar me-1"></i>
                        {new Date(
                          order.orderDate || order.createdAt
                        ).toLocaleDateString()}
                      </div>
                      <div className="small">
                        <i className="bi bi-clock me-1"></i>
                        {new Date(
                          order.orderDate || order.createdAt
                        ).toLocaleTimeString()}
                      </div>
                    </div>
                  </td>
                  <td className="py-3">
                    <span className="badge bg-info  px-3 py-2 rounded-pill">
                      <i className="bi bi-rulers me-1"></i>
                      {order.totalItems}
                    </span>
                  </td>
                  <td className="py-3">
                    <span className="fw-bold text-success fs-6">
                      ${order.totalAmount.toFixed(2)}
                    </span>
                  </td>
                  <td className="py-3">
                    <span
                      className={`badge px-3 py-2 rounded-pill ${
                        order.status == ORDER_STATUS.PENDING
                          ? "bg-warning"
                          : order.status == ORDER_STATUS.CONFIRMED
                          ? "bg-info"
                          : order.status == ORDER_STATUS.SHIPPED
                          ? "bg-primary"
                          : order.status == ORDER_STATUS.DELIVERED
                          ? "bg-success"
                          : order.status == ORDER_STATUS.CANCELLED
                          ? "bg-danger"
                          : "bg-secondary"
                      }`}
                    >
                      <i className="bi bi-boxes me-1"></i>
                      {order.status}
                    </span>
                  </td>
                  <td className="py-3 text-center">
                    <div className="btn-group" role="group">
                      <button
                        className="btn btn-outline-primary btn-sm px-3"
                        title="Edit Product"
                        onClick={() => onViewOrder(product)}
                      >
                        <i className="bi bi-pencil-square"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default OrderTable;
