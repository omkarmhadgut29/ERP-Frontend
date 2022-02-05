import { createContext, useState } from "react";

const GlobalVar = createContext();

export default GlobalVar;

export const VarProvider = ({ children }) => {
  let url = window.location.href;
  let page = url.split("/")[3];
  const [CurrentPage, setCurrentPage] = useState(page);

  const contextData = {
    CurrentPage: CurrentPage,
    setCurrentPage: setCurrentPage,
  };

  return (
    <GlobalVar.Provider value={contextData}>{children}</GlobalVar.Provider>
  );
};
