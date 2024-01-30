import { RiMenu2Fill } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
const NavDrawer = () => {
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer" className="btn btn-xs drawer-button">
          <RiMenu2Fill className="text-lg" />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <div className=" p-4 text-left space-y-3    w-[60%] min-h-full bg-white text-base-content">
          <div className="mb-5">
            <img src="https://i.ibb.co/BPTTCmW/logo.png" alt="logo" />
          </div>
          {/* Sidebar content here */}
          <ul className=" ml-4 space-y-5 text-xl font-semibold">
            <motion.li
              whileHover={{ scale: 1.1, x: 10 }}
              whileTap={{ scale: 0.9, x: -10 }}
              className="bg-none hover:link"
            >
              <NavLink>Home</NavLink>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1, x: 10 }}
              whileTap={{ scale: 0.9, x: -10 }}
              className="bg-none hover:link"
            >
              <NavLink>Shop</NavLink>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1, x: 10 }}
              whileTap={{ scale: 0.9, x: -10 }}
              className="bg-none hover:link"
            >
              <NavLink>About</NavLink>
            </motion.li>
          </ul>
          <>
            <NavLink to="/login">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.94 }}
                className="w-full btn btn-sm text-xl mt-10 bg-gray-300 border-none"
              >
                Login
              </motion.button>
            </NavLink>
          </>
        </div>
      </div>
    </div>
  );
};

export default NavDrawer;
