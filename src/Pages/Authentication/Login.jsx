import { Link, useNavigate } from "react-router-dom";
import Socal from "../../Components/Common/Socal";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const Login = () => {
  const { userLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    userLogin(email, password).then((res) => {
      console.log(res.user.metadata.lastSignInTime);
      const user = {
        email,
        lastLoggedAt: res.user?.metadata?.lastSignInTime,
      };
      fetch("http://localhost:2500/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "SignIn successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };

  return (
    <div>
      <div className=" bg-gray-100  py-32">
        <div className="max-w-screen-sm bg-white py-16 rounded-lg shadow-xl mx-auto">
          <p className="  text-4xl pb-5 ">Login Now</p>
          <form onSubmit={handleLogin} className="text-left space-y-5 md:px-20">
            <div className="space-y-3">
              <p className="font-semibold text-xl">Email</p>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="px-4 py-2 w-full block bg-base-200 rounded  text-lg font-medium"
              />
            </div>
            <div className="space-y-3">
              <p className="font-semibold text-xl ">Password</p>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="px-4 w-full block text-lg py-1 rounded bg-base-200"
              />
            </div>
            <p className="flex justify-end text-xl hover:link hover:font-semibold">
              Forgot Password
            </p>
            <input
              type="submit"
              value="Login"
              className="btn bg-purple-500 hover:bg-purple-600 text-xl  text-white w-full "
            />
          </form>
          <div className="text-center py-5">
            <p className="text-xl font-semibold">
              New to this site ?
              <Link to="/register" className="hover:font-bold  hover:link">
                Please Register
              </Link>
            </p>
          </div>
          <Socal />
        </div>
      </div>
    </div>
  );
};

export default Login;
