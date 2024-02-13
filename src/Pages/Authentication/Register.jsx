import { Link, useNavigate } from "react-router-dom";
import Socal from "../../Components/Common/Socal";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../../../Firebase.Config";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";

const Register = () => {
  const { createNewUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const register = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const terms = form.terms.value;

    const user = { name, email };
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    const isValidPassword = passwordRegex.test(password);
    if (isValidPassword) {
      console.log("Password is valid.");
    } else {
      console.log("Password is invalid.");
      console.log("Password:", password);
      console.log("Validation Result:", isValidPassword);
      if (typeof toast === "function") {
        toast("Password requirements not met. Please try again.");
      } else {
        console.error("Toast function is not defined or not a function.");
      }
    }

    console.log(password, name, email, terms);
    createNewUser(email, password)
      .then((result) => {
        //Save data to backend

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
          })
          .catch((error) => console.log(error));

        console.log(result);
        updateProfile(auth.currentUser, {
          displayName: name,
        }).then(() => {
          console.log("name aded");
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
        });
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className=" bg-gray-100  py-32">
        <div className="max-w-screen-sm bg-white py-16 rounded-lg shadow-xl mx-auto">
          <p className="  text-4xl pb-5 ">Register Now</p>
          <form
            onSubmit={register}
            className="text-left space-y-5 px-2 md:px-20"
          >
            <div className="space-y-3">
              <p className="font-semibold text-xl">Name</p>
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="px-4 bg-base-200  rounded py-2 w-full block text-lg font-medium"
              />
            </div>
            <div className="space-y-3">
              <p className="font-semibold text-xl">Email</p>
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="px-4 bg-base-200  rounded py-2 w-full block text-lg font-medium"
              />
            </div>
            <div className="space-y-3">
              <p className="font-semibold text-xl ">Password</p>
              <input
                type="password"
                name="password"
                placeholder="Password must be 8 char"
                className="px-4 bg-base-200  rounded w-full block text-lg py-1"
              />
            </div>
            <div>
              {massage && <p className="text-xl text-red-600">{massage}</p>}
            </div>
            <div className="flex gap-4 items-center">
              <input
                id="terms"
                type="checkbox"
                name="terms"
                className="w-4 h-4"
                required
              />
              <p
                htmlFor="terms"
                className="flex  text-xl hover:link font-semibold"
              >
                Terms & Condition
              </p>
            </div>
            <input
              type="submit"
              value="Register"
              className="btn bg-purple-500 hover:bg-purple-600 text-white text-xl  w-full "
            />
          </form>
          <div className="text-center py-5">
            <p className="text-xl font-semibold">
              Already Have ?
              <Link className="hover:font-bold hover:link" to="/login">
                Please Login
              </Link>
            </p>
          </div>
          <Socal />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
