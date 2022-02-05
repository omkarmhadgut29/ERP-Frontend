import { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [AuthTokens, setAuthTokens] = useState(() =>
    localStorage.getItem("authToken")
      ? JSON.parse(localStorage.getItem("authToken"))
      : null
  );
  const [user, setUser] = useState(() =>
    localStorage.getItem("authToken")
      ? jwt_decode(localStorage.getItem("authToken"))
      : null
  );
  const [userLoggedIn, setuserLoggedIn] = useState(false);

  const [loading, setLoading] = useState(true);

  let history = useNavigate();

  let loginUser = async (e) => {
    e.preventDefault();
    let response = await fetch("http://127.0.0.1:8000/api/token/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: e.target.username.value,
        password: e.target.password.value,
      }),
    });
    let data = await response.json();

    if (response.status === 200) {
      setAuthTokens(data);
      setUser(jwt_decode(data.access));
      localStorage.setItem("authToken", JSON.stringify(data));
      setuserLoggedIn(true);
      history("/");
    } else {
      alert("Invalid credentials");
    }
  };

  let logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("authToken");
    history("/login");
  };

  let contextData = {
    AuthTokens: AuthTokens,
    setAuthTokens: setAuthTokens,
    user: user,
    setUser: setUser,
    loginUser: loginUser,
    logoutUser: logoutUser,
    userLoggedIn: userLoggedIn,
    setuserLoggedIn: setuserLoggedIn,
  };

  useEffect(() => {
    if (AuthTokens) {
      setUser(jwt_decode(AuthTokens.access));
    }
    setLoading(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [AuthTokens, loading]);

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};
