import { Link } from "react-router-dom";

const MenuProfile = () => {
  return (
    <div>
      <div className="">
        <Link to="/profile">
          <img
            className="w-20 rounded-full mx-auto mt-5"
            src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            alt="DefaultProfile"
          />
        </Link>
        <div className="space-y-2 mt-3">
          <p>Name</p>
          <p>Role</p>
        </div>
      </div>
    </div>
  );
};

export default MenuProfile;
