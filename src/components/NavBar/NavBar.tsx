import { Link, Outlet, useLocation } from "react-router-dom";
import { useState } from "react";
import { GoHomeFill } from "react-icons/go";
import { FaClipboardList } from "react-icons/fa";

function NavBar() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const location = useLocation();

  if (location.pathname.includes("/products")) {
    if (activeTab !== 1) {
      setActiveTab(1);
    }
  } else {
    if (activeTab !== 0) {
      setActiveTab(0);
    }
  }

  return (
    <div className="h-100">
      <Outlet />
      <nav className="navbar navbar-expand-lg bg-body-tertiary position-fixed top-0 left-0 right-0 w-100 shadow">
        <ul className="navbar-nav mb-2 mb-lg-0 d-flex flex-row gap-3 ms-5">
          <li className="nav-item">
            <Link
              to="/"
              className={`nav-link d-flex align-items-center ${
                activeTab === 0 ? "active" : ""
              }`}
            >
              {<GoHomeFill className="me-1" />}
              Home
            </Link>
          </li>
          <li className="nav-item ">
            <Link
              to="/products"
              className={`nav-link d-flex align-items-center ${
                activeTab === 1 ? "active" : ""
              }`}
            >
              {<FaClipboardList className="me-1" />}
              Products
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
