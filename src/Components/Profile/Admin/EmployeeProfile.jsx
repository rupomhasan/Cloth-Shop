import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { Progress } from "antd";

const EmployeeProfile = () => {
  return (
    <div className=" ">
      <div className="ml-16 text-left my-6">
        <h3 className="text-3xl font-bold font-playfair uppercase">Profile</h3>
        <p>Employee Profile</p>
      </div>
      <div className="grid lg:grid-cols-2 gap-5 ">
        <div className="px-10 bg-white mx-5 rounded  shadow-md ">
          <div className=" py-5 border-b-2 ">
            <div>
              <img
                className="w-32 rounded-full mx-auto"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                alt="defaultProfile"
              />
            </div>
            <div className="my-4">
              <p className="text-xl font-extrabold font-playfair my-2">Name</p>
              <p>Email</p>
              <div className="  mt-2 flex  gap-3 justify-center">
                <div className="p-4 bg-sky-500 rounded-full">
                  <FaGoogle className="text-white" />
                </div>
                <div className="p-4 bg-blue-900 rounded-full">
                  <FaFacebookF className="text-white" />
                </div>
                <div className="p-4 bg-blue-500 rounded-full">
                  <FaTwitter className="text-white" />
                </div>
              </div>
            </div>
          </div>
          <div className="py-5 text-left">
            <p className="text-2xl font-bold ">Employee Status </p>
            <div className="mt-4">
              <p className="text-gray-500">Performance</p>
              <Progress strokeColor="#ff8084" percent={80} />
            </div>
            <div className="mt-4">
              <p className="text-gray-500">Overtime</p>
              <Progress strokeColor="#13c9ca" percent={60} />
            </div>
            <div className="mt-4">
              <p className="text-gray-500">Leaves taken</p>
              <Progress percent={30} strokeColor="#dc3545" />
            </div>
          </div>
        </div>
        <div className="bg-white mx-5 p-10 rouded shadow-xl">
          <div>
            <div className="flex  items-center gap-2 text-xl font-bold text-red-600 border-b-2 pb-2">
              <CgProfile />
              <p>Profile</p>
            </div>
            <div className="grid grid-cols-3 my-10">
              <div className="space-y-5 text-xl font-medium font-playfair text-left">
                <p>Name </p>
                <p>Email </p>
                <p>Gender </p>
                <p>Mobile Number </p>
                <p>Location </p>
                <p>Role</p>
              </div>
              <div className="space-y-5 text-xl font-medium font-playfair col-span-2 text-left">
                <p>: Name </p>
                <p>: Email </p>
                <p>: Gender </p>
                <p>: Mobile Number </p>
                <p>: Location </p>
                <p>: Role</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeProfile;
