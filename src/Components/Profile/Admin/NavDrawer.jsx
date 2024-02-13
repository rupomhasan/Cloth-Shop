import Nav from "./Nav";
import { IoMenu } from "react-icons/io5";

const NavDrawer = () => {
  return (
    <div>
      <div className="drawer lg:drawer-open z-[9999]">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content text-left my-5 ">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className=" absolute btn btn-sm text-2xl drawer-button lg:hidden  "
          >
            <IoMenu />
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className=" p-4 h-full w-52 bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <Nav />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavDrawer;
