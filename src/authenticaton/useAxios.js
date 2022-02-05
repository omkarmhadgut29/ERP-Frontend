import axios from "axios";
import jwt_decode from "jwt-decode";
import dayjs from "dayjs";
import { useContext } from "react";
import AuthContext from "../authenticaton/AuthContext";

const baseUrl = "http://127.0.0.1:8000";

const useAxios = () => {
  let { AuthTokens, setAuthTokens, setUser } = useContext(AuthContext);

  const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {
      Authorization: `Bearer ${AuthTokens?.access}`,
    },
  });

  axiosInstance.interceptors.request.use(async (req) => {
    const user = jwt_decode(AuthTokens?.access);
    const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;

    if (!isExpired) return req;

    const response = await axios.post(`${baseUrl}/api/token/refresh/`, {
      refresh: AuthTokens?.refresh,
    });

    response.data["refresh"] = AuthTokens?.refresh;

    localStorage.setItem("authToken", JSON.stringify(response.data));

    setAuthTokens(response.data);
    setUser(jwt_decode(response.data.access));

    req.headers.Authorization = `Bearer ${response.data.access}`;

    return req;
  });

  return axiosInstance;
};

export default useAxios;
