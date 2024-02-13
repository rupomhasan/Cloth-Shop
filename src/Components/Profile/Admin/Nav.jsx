import { NavLink } from "react-router-dom";
import { FiHome } from "react-icons/fi";
import { FaBox } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { TiUserAdd } from "react-icons/ti";
import { MdAddBox } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import MenuProfile from "./MenuProfile";

const Nav = () => {
  return (
    <div>
      <div>
        <MenuProfile />
      </div>
      <ul className="text-left space-y-2 border-t-2 bg-base-200 my-10 font-medium text-xl font-playfair">
        <li className="px-5 py-2  hover:bg-gray-200 rounded ">
          <NavLink to="/profile/dashboard" className="flex gap-3 items-center">
 
            <FiHome />
            DashBoard
          </NavLink>
        </li>
        <li className="px-5 py-2 hover:bg-gray-200 rounded ">
          <NavLink to="/profile/products" className="flex gap-3 items-center">
            <FaBox />
            products
          </NavLink>
        </li>
        <li className="px-5 py-2 hover:bg-gray-200 rounded ">
          <NavLink
            to="/profile/addProducts"
            className="flex gap-3 items-center"
          >
 
            <MdAddBox />
            AddProducts
          </NavLink>
        </li>
        <li className="px-5 py-2 hover:bg-gray-200 rounded ">
          <NavLink to="/profile/user" className="flex gap-3 items-center">
            <FaRegUser />
            User
          </NavLink>
        </li>
        <li className="px-5 py-2 hover:bg-gray-200 rounded ">
          <NavLink to="/profile/addUser" className="flex gap-3 items-center">
 
            <TiUserAdd />
            AddUser
          </NavLink>
        </li>

        <li className="flex gap-3 items-center px-5 py-2  hover:bg-gray-200 rounded ">
          <IoMdSettings /> Settings
        </li>
      </ul>
    </div>
  );
};

export default Nav;
