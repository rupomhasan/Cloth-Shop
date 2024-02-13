import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import auth from "../../Firebase.Config";
import {
  createUserWithEmailAndPassword,
  deleteUser,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import Swal from "sweetalert2";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [loader, setLoader] = useState(true);
  const [admin, setAdmin] = useState(false);
  const [user, setUser] = useState(false);
  //Create new user

  const createNewUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //Login User
  const userLogin = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const socialUser = (provider) => {
    setLoader(true);
    return signInWithPopup(auth, provider);
  };

  const userLogout = () => {
    Swal.fire({
      title: "Do you want to LogOut",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        signOut(auth).then(() => {
          console.log("Logout succesfull");
          Swal.fire("SignOut", " ", "success");
        });
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
        return;
      }
    });
    return;
  };
  const deletedUser = () => {
    return deleteUser(auth.currentUser);
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        if (user.email === "rupom.hasan607299@gmail.com") {
          console.log(user);
          setAdmin(true);
        } else setAdmin(false);

        setUser(true);
        setLoader(false);
      } else setUser(false);
    });
  }, []);

  const info = {
    socialUser,
    userLogin,
    createNewUser,
    deletedUser,
    userLogout,
    user,
    admin,
    loader,
  };

  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
