import { useContext } from "react";
import jwt_decode from "jwt-decode";
import dayjs from "dayjs";

import LoginPage from "../pages/LoginPage";
import Sidebar from "../components/Sidebar";
import AuthContext from "../authenticaton/AuthContext";

const Authentication = () => {
  let { user } = useContext(AuthContext);
  let AuthTokens = localStorage.getItem("authToken")
    ? JSON.parse(localStorage.getItem("authToken"))
    : null;

  if (AuthTokens) {
    let refresh_token = jwt_decode(AuthTokens?.refresh);

    const isExpired = dayjs.unix(refresh_token.exp).diff(dayjs()) < 1;

    if (isExpired) {
      return <LoginPage />;
    } else {
      return user ? <Sidebar /> : <LoginPage />;
    }
  } else {
    return <LoginPage />;
  }
};

export default Authentication;
