import { useEffect } from "react";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import AppRoutes from "./router/router";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "./services/firebase";
import { setUser } from "./store/slice/authSlice";
import { doc, getDoc } from "firebase/firestore";

function App() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  useEffect(() => {
    document.body.setAttribute("data-bs-theme", theme);
  }, [theme]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const userDocRef = doc(db, "users", user.uid);
          const userDoc = await getDoc(userDocRef);

          let userData;
          if (userDoc.exists()) {
            userData = userDoc.data();
            // Ensure the uid is included in the userData
            userData.uid = user.uid;
          } else {
            userData = {
              uid: user.uid,
              email: user.email,
              displayName: user.displayName,
              role: "customer",
            };
          }
          dispatch(setUser(userData));
        } catch (error) {
          console.error("Error loading user data:", error);
          dispatch(setUser(null));
        }
      } else {
        dispatch(setUser(null));
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  const getThemeStyles = () => {
    if (theme === "dark") {
      return {
        background: `linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 25%, #16213e 50%, #0f4c75 75%, #00d4ff 100%)`,
        backgroundAttachment: "fixed",
        color: "#ffffff",
      };
    } else {
      return {
        background: `linear-gradient(135deg, #a8edea 0%, #fed6e3 25%, #d299c2 50%, #fef9d7 75%, #a8edea 100%)`,
        backgroundAttachment: "fixed",
        color: "#2c3e50",
      };
    }
  };

  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100" style={getThemeStyles()}>
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
