import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="container mx-auto ">
      <Header />
      <div className="min-h-[calc(100vh-292px)] px-2">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
