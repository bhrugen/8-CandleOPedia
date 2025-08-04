import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import AppRoutes from "./router/router";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <BrowserRouter>
      <div
        className="d-flex flex-column min-vh-100"
        style={{
          background: `linear-gradient(135deg, #a8edea 0%, #fed6e3 25%, #d299c2 50%, #fef9d7 75%, #a8edea 100%)`,
          backgroundAttachment: "fixed",
          color: "#2c3e50",
        }}
      >
        <Header />
        <main className="flex-grow-1">
          <AppRoutes />
        </main>
        <Footer />
        <ToastContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;
