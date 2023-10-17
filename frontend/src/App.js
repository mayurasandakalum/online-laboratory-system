import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { SideNavbar, TopNavbar } from "./components/Navbar";
import Payroll from "./screens/PayrollManagement/Payrolls";
import Finance from "./screens/FinanceManagement/Finance";
import Register from "./screens/FinanceManagement/pages/Login";

import { PATHS } from "./utils/paths";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <div className="sub-Container">
        <div className="side-navbar">
          <SideNavbar />
        </div>
        <div className="main-body">
          <div className="top-navbar">
            <TopNavbar />
          </div>
          <div className="main-content">
            <BrowserRouter>
              <Routes>
                <Route path={`${PATHS.finance}/*`} element={<Finance />} />
                <Route path={`${PATHS.payroll}/*`} element={<Payroll />} />
              </Routes>
            </BrowserRouter>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
