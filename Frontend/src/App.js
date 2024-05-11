import "./assets/css/App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import User from "./components/User";
import About from "./components/About";
import NavBar from "./components/NavBar";
import Privacy from "./components/Privacy";
import TermsAndConditions from "./components/TermsAndConditions";
import EnhancedTable from "./components/EnhancedTable";
import FAQ from "./components/Faq";
import Report from "./components/Report";
import ServicePage from "./components/ServicePage";
import Custom from "./components/Custom";
import CustomPage from "./components/CustomPage";
import Output from "./components/Output";
import Checkout from "./components/Checkout";
import LantingPage from "./components/LantingPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.min.css";
import Fragrance from "./components/Fragrance";
import Review from "./components/Review";
import Quotes from "./components/Quotes";

const PrivateRoute = ({ element: Component, allowedRoles }) => {
  const token = localStorage.getItem("token");
  const userRole = localStorage.getItem("role");

  if (!token) {
    return <Navigate to="/" />;
  }

  if (allowedRoles.includes(userRole)) {
    return <Component />;
  } else {
    return <Navigate to="/" />;
  }
};

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<LantingPage />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute element={Dashboard} allowedRoles={["ADMIN"]} />
            }
          />
          <Route
            path="/home"
            element={
              <PrivateRoute element={Home} allowedRoles={["USER", "ADMIN"]} />
            }
          />
          <Route
            path="/user"
            element={<PrivateRoute element={User} allowedRoles={["ADMIN"]} />}
          />
          <Route path="/nav" element={<NavBar />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacyAndPolicy" element={<Privacy />} />
          <Route path="/termsAndCondition" element={<TermsAndConditions />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/orders" element={<EnhancedTable />} />
          <Route path="/report" element={<Report />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/custom" element={<Custom />} />
          <Route path="/customPage" element={<CustomPage />} />
          <Route path="/review" element={<Review />} />
          <Route path="/output" element={<Output />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/fragrance" element={<Fragrance />} />
          <Route path="/quote" element={<Quotes/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
