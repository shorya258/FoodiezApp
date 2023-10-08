import React, { useState } from "react";
import { Badge } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Modal from "../Modal";
import Cart from "../screens/Cart";
import { useCart } from "./ContextReducer";
export default function Navbar() {
  const [cartView, setCartView] = useState(false);

  let data = useCart();
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/loginuser");
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand fs-2 fst-italic" to="/home">
            FOODIEZ
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2">
              <li className="nav-item">
                <Link
                  className="nav-link active fs-5"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              {localStorage.getItem("authToken") && (
                <li className="nav-item">
                  <Link
                    className="nav-link active fs-5"
                    aria-current="page"
                    to="/orderHistory"
                  >
                    Order History
                  </Link>
                </li>
              )}
            </ul>
            <div className="d-flex">
              {!localStorage.getItem("authToken") && (
                <>
                  <Link
                    className="btn bg-white text-dark mx-1 "
                    aria-current="page"
                    to="/loginuser"
                  >
                    Login
                  </Link>
                  <Link
                    className="btn bg-white text-dark mx-1"
                    aria-current="page"
                    to="/createuser"
                  >
                    Sign up
                  </Link>
                </>
              )}
              {localStorage.getItem("authToken") && (
                <>
                  <div
                    className="btn bg-white text-dark me-1"
                    onClick={() => {
                      setCartView(true);
                    }}
                  >
                    My Cart
                    {data.length > 0 && (
                      <Badge pill bg="danger">
                        {data.length}
                      </Badge>
                    )}
                  </div>
                  {cartView && (
                    <Modal
                      onClose={() => {
                        setCartView(false);
                      }}
                    >
                      <Cart />
                    </Modal>
                  )}
                  <div
                    className="btn bg-white text-dark me-1"
                    onClick={handleLogout}
                  >
                    Log out
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
