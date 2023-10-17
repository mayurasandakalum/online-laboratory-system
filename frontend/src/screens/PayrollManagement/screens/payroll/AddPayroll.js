import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/add-payroll-style.css";
import { Alert } from "../../components/Alert/Alert";

const initialState = {
  id: "",
  name: "",
  payDate: "",
  startingDate: "",
  endDate: "",
};
export const AddPayroll = () => {
  const [openAlert, setOpenAleart] = useState(false);
  const navigator = useNavigate();
  const [formData, setFormData] = useState(initialState);
  const [error, SetError] = useState({
    id: "",
    name: "",
    payDate: "",
    startingDate: "",
    endDate: "",
  });

  /*
   * input onChange method
   * @param {e} e
   */
  const onchange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    //validating user inputs
    switch (name) {
      case "name":
        error.name =
          value.length <= 0 ? "Name can not be empty! Ex:- Jhon doe " : "";
        formData.name = value;
        break;
      case "id":
        error.id = value.length <= 0 ? "Id can not be empty! Ex:- 000001 " : "";
        formData.id = value;
        break;
      case "payDate":
        error.payDate =
          value.length <= 0
            ? "Pay date name can not be empty! Ex:- 2023-10-01 "
            : "";
        formData.payDate = value;
        break;
      case "startingDate":
        error.startingDate =
          value.length <= 0
            ? "Starting date number can not be empty! Ex:- 2023-10-01 "
            : "";
        formData.startingDate = value;
        break;
      case "payment":
        error.endDate =
          value.length <= 0 ? "End date can not be empty! 2023-10-30 " : "";
        formData.endDate = value;
        break;
      default:
        break;
    }
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(e.target.name + " " + e.target.value);
  };

  return (
    <>
      {openAlert ? (
        <Alert
          message="Success"
          type="error"
          open={openAlert}
          setOpen={setOpenAleart}
        />
      ) : (
        <div className="body-container">
          <h2>Add payment</h2>
          <div className="page-image"></div>
          <div className="form-container">
            <div className="form-left">
              <div className="form-input">
                <label htmlFor="name">Employee Name</label>
                <input
                  className="input"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter employee name"
                  onChange={onchange}
                />
                <div className="error-text">{error.name ? error.name : ""}</div>
              </div>
              <div className="form-input">
                <label htmlFor="date">Employee Id</label>
                <input
                  className="input-date"
                  type="date"
                  id="date"
                  name="date"
                  placeholder="Enter date"
                  onChange={onchange}
                />
                <div className="error-text">{error.id ? error.id : ""}</div>
              </div>
              <div className="form-input">
                <label htmlFor="payDate">Pay Date</label>
                <input
                  className="input-date"
                  type="date"
                  id="payDate"
                  name="payDate"
                  placeholder="Enter pay date"
                  onChange={onchange}
                />
                <div className="error-text">
                  {error.payDate ? error.payDate : ""}
                </div>
              </div>
            </div>
            <div className="form-right">
              <div className="form-input">
                <label htmlFor="startingDate">Starting Date</label>
                <input
                  className="input-date"
                  type="date"
                  id="startingDate"
                  name="startingDate"
                  placeholder="Enter starting date"
                  onChange={onchange}
                />
                <div className="error-text">
                  {error.startingDate ? error.startingDate : ""}
                </div>
              </div>
              <div className="form-input">
                <label htmlFor="endDate">End Date</label>
                <input
                  className="input-date"
                  type="date"
                  id="endDate"
                  name="endDate"
                  placeholder="Enter end date"
                  onChange={onchange}
                />
                <div className="error-text">
                  {error.endDate ? error.endDate : ""}
                </div>
              </div>
              <div className="button-row">
                <button
                  className="btn-submit"
                  onClick={() => setOpenAleart(!openAlert)}
                >
                  Submit
                </button>
                <button
                  className="btn-cancle"
                  onClick={() => navigator("/payroll")}
                >
                  Cancle
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
