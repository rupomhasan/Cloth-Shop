import { AiFillDelete } from "react-icons/ai";
import { Link, useLoaderData } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

const Employee = () => {
  const users = useLoaderData();

  return (
    <div>
      <p className="text-left ml-16 text-2xl font-bold my-5">User List</p>
      <div className=" bg-white  p-5  ">
        <div className="flex justify-end my-3">
          <Link to="/profile/addUser">
            <button className="btn px-5 text-xl bg-purple-500 text-white">
              Add User
            </button>
          </Link>
        </div>
        <div className="overflow-auto">
          <table className="table ">
            <thead>
              <tr className="">
                <th className="border-2 text-xl bg-base-200  text-center">
                  Id
                </th>
                <th className="border-2 text-xl bg-base-200  text-center">
                  User Name
                </th>
                <th className="border-2 text-xl bg-base-200  text-center">
                  Image
                </th>
                <th className="border-2 text-xl bg-base-200  text-center">
                  Email
                </th>{" "}
                <th className="border-2 text-xl bg-base-200  text-center">
                  Details
                </th>
                <th className="border-2 text-xl bg-base-200  text-center">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, idx) => (
                <tr key={idx} className="">
                  <td className="border-2 text-xl  text-center">{user.id}</td>
                  <td className="border-2 text-xl  text-center">{user.name}</td>
                  <td className="border-2 text-xl  text-center">
                    <img
                      src={user?.photoUrl}
                      className="w-10 h-10"
                      alt="product"
                    />
                  </td>
                  <td className="border-2 text-xl   text-center">
                    <div className="flex items-center ">{user.email}</div>
                  </td>
                  <td className="border-2 text-3xl ">
                    <AiFillDelete className="mx-auto" />
                  </td>
                  <td className="border-2 text-3xl  ">
                    <Link to={`/profile/${user._id}`}>
                      <CgProfile className="mx-auto" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* <ToastContainer /> */}
    </div>
  );
};

export default Employee;
