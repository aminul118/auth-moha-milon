import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";

const MainLayout = () => {
  return (
    <div>
      {/* Tost Message */}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <Header />
      <div className="min-h-[calc(100vh-292px)] container mx-auto px-2">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
