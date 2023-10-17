import "../../styles/side-nav-style.css";
import logo from "../../assets/logo.png";

import { PATHS } from "../../utils/paths";

export const SideNavbar = () => {
  return (
    <div className="nav-container">
      <img src={logo} alt="Avatar" className="app-logo" />
      <div className="nav-content">
        <div className="nav-item">
          <a href="/">Dashboard</a>
        </div>
        <div className="nav-item">
          <a href="/add">Blog & Feedback</a>
        </div>

        <div className="nav-item">
          <a href="/add">Patients</a>
        </div>

        <div className="nav-item">
          <a href="/add">Staff members</a>
        </div>

        <div className="nav-item">
          <a href="/add">Inventory</a>
        </div>

        <div className="nav-item">
          <a href="/add">Lab Reports</a>
        </div>

        <div className="nav-item">
          <a href="/payroll">Attendence & Payroll</a>
        </div>

        <div className="nav-item">
          <a href={PATHS.finance}>Finance</a>
        </div>

        <hr className="nav-hr" />

        <div className="nav-item logout">
          <a href="/add">Log out</a>
        </div>
      </div>
    </div>
  );
};
