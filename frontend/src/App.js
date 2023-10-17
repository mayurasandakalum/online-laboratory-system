import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { SideNavbar, TopNavbar } from "./components/Navbar";
import Payroll from "./screens/PayrollManagement/Payrolls";

import { PATHS } from "./utils/paths";
import "./App.css";

const App = () => {
  return (
    <div className="container">
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
