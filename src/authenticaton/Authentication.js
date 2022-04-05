import { useContext } from "react";
import jwt_decode from "jwt-decode";
import dayjs from "dayjs";

import LoginPage from "../pages/LoginPage";
import MainPage from "../pages/MainPage";

import Sidebar from "../components/Sidebar";
import AuthContext from "../authenticaton/AuthContext";
import { Route, Routes, useNavigate } from "react-router-dom";
import SignIn from "../pages/SignIn";
const Authentication = () => {
  let { user } = useContext(AuthContext);
  let AuthTokens = localStorage.getItem("authToken")
    ? JSON.parse(localStorage.getItem("authToken"))
    : null;

  if (AuthTokens) {
    let refresh_token = jwt_decode(AuthTokens?.refresh);

    const isExpired = dayjs.unix(refresh_token.exp).diff(dayjs()) < 1;

    // <Routes>
    //         <Route element={<SignIn />} path="/login" />
    //       </Routes>

    if (isExpired) {
      return (
        <>
          <MainPage />
        </>
      );
    } else {
      return user ? (
        <Sidebar />
      ) : (
        <>
          {/* <Routes>
            <Route element={<SignIn />} path="/login" />
          </Routes> */}
          <MainPage />
        </>
      );
    }
  } else {
    return (
      <>
        {/* <Routes>
          <Route element={<SignIn />} path="/login" />
        </Routes> */}
        <MainPage />
      </>
    );
  }
};

export default Authentication;
