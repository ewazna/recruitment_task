import { Outlet } from "react-router-dom";
import { useState } from "react";
import { GoHomeFill } from "react-icons/go";
import { FaClipboardList } from "react-icons/fa";

function NavBar() {
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
    <div className="h-100">
      <Outlet />
      <nav className="navbar navbar-expand-lg bg-body-tertiary position-absolute top-0 left-0 right-0 w-100 shadow">
        <ul className="navbar-nav mb-2 mb-lg-0 d-flex flex-row gap-3 ms-5">
          <li className="nav-item">
            <a
              className={`nav-link d-flex align-items-center ${
                activeTab === 0 ? "active" : ""
              }`}
              aria-current="page"
              href="/"
            >
              {<GoHomeFill className="me-1" />}
              Home
            </a>
          </li>
          <li className="nav-item ">
            <a
              className={`nav-link d-flex align-items-center ${
                activeTab === 1 ? "active" : ""
              }`}
              aria-current="page"
              href="/products"
            >
              {<FaClipboardList className="me-1" />}
              Products
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
