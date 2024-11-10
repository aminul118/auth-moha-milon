import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <div className="min-h-[calc(100vh-292px)] container mx-auto px-2">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
