import OrderManagement from "../admin/OrderManagement";

function MyOrders() {
  return (
    <OrderManagement
      isCustomerView={true}
      title="My Orders"
      subtitle="Track and view your order history"
    />
  );
}

export default MyOrders;
