import { Outlet, useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import { useState } from "react";
import { GoHomeFill } from "react-icons/go";
import { FaClipboardList } from "react-icons/fa";

function NavBar() {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState<number>(0);

  if (window.location.pathname.includes("/products")) {
    if (activeTab !== 1) {
      setActiveTab(1);
    }
  } else {
    if (activeTab !== 0) {
      setActiveTab(0);
    }
  }

  return (
    <div className="relative w-full h-full">
      <Outlet />
      <div className="navigation">
        <Button
          className="nav-btn"
          active={activeTab === 0}
          onClick={() => {
            navigate("/");
          }}
          icon={<GoHomeFill />}
        >
          Home
        </Button>
        <Button
          className="nav-btn"
          active={activeTab === 1}
          onClick={() => {
            navigate("/products");
          }}
          icon={<FaClipboardList />}
        >
          Products
        </Button>
      </div>
    </div>
  );
}

export default NavBar;
