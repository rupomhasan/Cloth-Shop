import { Link } from "react-router-dom";
import NavDrawer from "./NavDrawer";
import NavList from "./NavList";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const Navbar = () => {
  const [data, setData] = useState([]);
  const { user, admin, userLogout } = useContext(AuthContext);

  useEffect(() => {
    fetch("http://localhost:2500/addedCart")
      .then((res) => res.json())
      .then((data) => setData(data));
  });

  return (
    <div className="shadow-md ">
      <div className="navbar  max-w-screen-xl mx-auto ">
        <div className="md:hidden  ">
          <NavDrawer />
        </div>
        <div className="flex-1 ml-3">
          <img className="w-28" src="https://i.ibb.co/BPTTCmW/logo.png" />
        </div>
        <div className="hidden md:navbar md:flex-1">
          <NavList />
        </div>
        <div className="flex-none gap-1">
          <div>
            {!user ? (
              <Link to="/login">
                <button className="btn btn-sm px-4 text-lg bg-purple-600 text-white">
                  Login
                </button>
              </Link>
            ) : (
              <button
                onClick={userLogout}
                className="btn btn-sm px-4 text-lg bg-purple-600 text-white"
              >
                Logout
              </button>
            )}
          </div>
          <Link to="/myCart">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7"
                    fill="none"
                    viewBox="2 1 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="badge badge-sm indicator-item">
                    {data.length}
                  </span>
                </div>
              </div>
            </div>
          </Link>

          <div>
            {admin ? (
              <Link to="/profile">
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img
                        alt="profile"
                        src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            ) : (
              <Link to="/userProfile">
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img
                        alt="profile"
                        src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
