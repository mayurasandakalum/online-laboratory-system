import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { SideNavbar, TopNavbar } from "./components/Navbar";
import Payroll from "./screens/PayrollManagement/Payrolls";
import Finance from "./screens/FinanceManagement/Finance";
import Appointment from "./screens/AppointmentManagement/Appointment";
import Patient from "./screens/PatientManagement/Patient";

import { PATHS } from "./utils/paths";
import "./App.css";
<<<<<<< HEAD
// import { WorkoutsContextProvider } from './context/WorkoutContext'
import { WorkoutsContextProvider } from "./screens/PatientManagement/context/WorkoutContext";
=======
import Staff from "./screens/StaffManagement/Staff";
import AddEmployee from "./screens/StaffManagement/components/AddEmployee";
>>>>>>> 604f21e (add staff to frontend)

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
                <Route
                  path={`${PATHS.appointment}/*`}
                  element={<Appointment />}
                />
<<<<<<< HEAD
<<<<<<< HEAD
                <Route
                  path={`${PATHS.patients}/*`}
                  element={
                    <WorkoutsContextProvider>
                      <Patient />
                    </WorkoutsContextProvider>
                  }
                />
=======
                <Route path={`${PATHS.staff}/*`} element={<AddEmployee />} />
>>>>>>> 604f21e (add staff to frontend)
=======
                <Route path={`${PATHS.staff}/*`} element={<Staff />} />
>>>>>>> 15be47e (some changes in staff)
              </Routes>
            </BrowserRouter>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
