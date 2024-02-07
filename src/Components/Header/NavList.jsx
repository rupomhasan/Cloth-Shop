import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
const NavList = () => {
  return (
    <div className="">
      <ul className="navbar gap-7 text-xl font-semibold">
        <motion.li
          className="hover:link"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.92 }}
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              !isActive ? "text-black" : "text-green-400"
            }
          >
            Home
          </NavLink>
        </motion.li>
        <motion.li
          className="hover:link"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.92 }}
        >
          <NavLink
            to="/shop"
            className={({ isActive }) =>
              !isActive ? "text-black" : "text-green-400"
            }
          >
            Shop
          </NavLink>
        </motion.li>
        <motion.li
          className="hover:link"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.92 }}
        >
          <NavLink
            to="/register"
            className={({ isActive }) =>
              !isActive ? "text-black" : "text-green-400"
            }
          >
            About
          </NavLink>
        </motion.li>
      </ul>
    </div>
  );
};

export default NavList;
