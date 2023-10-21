import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { SideNavbar, TopNavbar } from "./components/Navbar";
import Payroll from "./screens/PayrollManagement/Payrolls";
import Finance from "./screens/FinanceManagement/Finance";
import Appointment from "./screens/AppointmentManagement/Appointment";
import Patient from "./screens/PatientManagement/Patient";
import Staff from "./screens/StaffManagement/Staff";

import { PATHS } from "./utils/paths";
import "./App.css";
// import { WorkoutsContextProvider } from './context/WorkoutContext'
import { WorkoutsContextProvider } from "./screens/PatientManagement/context/WorkoutContext";
import LabReport from "./screens/LabReportManagement/LabReport";

const App = () => {
  return (
    <div className="app-container">
      <div className="sub-Container">
        <div className="side-navbar no-print">
          <SideNavbar />
        </div>
        <div className="main-body">
          <div className="top-navbar">{/* <TopNavbar /> */}</div>
          <div className="main-content">
            <BrowserRouter>
              <Routes>
                <Route path={`${PATHS.finance}/*`} element={<Finance />} />
                <Route path={`${PATHS.payroll}/*`} element={<Payroll />} />
                <Route
                  path={`${PATHS.appointment}/*`}
                  element={<Appointment />}
                />
                <Route path={`/*`} element={<Appointment />} />
                <Route
                  path={`${PATHS.patients}/*`}
                  element={
                    <WorkoutsContextProvider>
                      <Patient />
                    </WorkoutsContextProvider>
                  }
                />
                <Route path={`${PATHS.staff}/*`} element={<Staff />} />
                <Route path={`${PATHS.labReports}/*`} element={<LabReport />} />
              </Routes>
            </BrowserRouter>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
