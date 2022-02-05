import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StyledEngineProvider } from "@mui/material/styles";

import { VarProvider } from "./context/GlobalVar";
import { AuthProvider } from "./authenticaton/AuthContext";
import Authentication from "./authenticaton/Authentication";

function App() {
  return (
    <Router>
      <StyledEngineProvider injectFirst>
        <AuthProvider>
          <VarProvider>
            <Authentication />
          </VarProvider>
        </AuthProvider>
      </StyledEngineProvider>
    </Router>
  );
}

export default App;
