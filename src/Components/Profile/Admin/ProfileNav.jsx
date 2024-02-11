import { Outlet} from "react-router-dom";
import NavDrawer from "./NavDrawer";


const ProfileNav = () => {
  return (
    <div className="">
      <div className="flex bg-gray-100">
        <div>
          {/* <Nav /> */}
          <NavDrawer />
        </div>
        <div className="w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ProfileNav;
