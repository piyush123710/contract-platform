
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { BlueprintProvider } from "./context/BlueprintContext";
import { ContractProvider } from "./context/ContractContext";

import Dashboard from "./pages/Dashboard";
import BlueprintBuilder from "./pages/BlueprintBuilder";
import CreateContract from "./pages/CreateContract";
import ContractDetails from "./pages/ContractDetails";

function App() {
  return (
    <BlueprintProvider>
      <ContractProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route
              path="/blueprint"
              element={<BlueprintBuilder />}
            />
            <Route
              path="/create"
              element={<CreateContract />}
            />
            <Route
              path="/contract/:id"
              element={<ContractDetails />}
            />
          </Routes>
        </BrowserRouter>
      </ContractProvider>
    </BlueprintProvider>
  );
}

export default App;
