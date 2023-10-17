import "../../styles/view-payroll-style.css";
import deleteIcon from "../../assets/icons8-delete-document-48.png";
import editIcon from "../../assets/icons8-edit-property-48.png";
import { useNavigate } from "react-router-dom";

export const ViewPayroll = () => {
  const navigator = useNavigate();

  return (
    <div className="">
      <div className="page-container">
        <div className="header-container">
          <h1 className="page-title">Payroll List</h1>
          <div className="search-wrapper">
            <input
              className="search-input"
              type="search"
              placeholder="Search"
            />
            <button className="btn-search">Search</button>
          </div>
        </div>
        <div className="table-container">
          <table className="table">
            <tr className="table-row-head">
              <th>Payment date</th>
              <th>Employee</th>
              <th>Starting date</th>
              <th>Ending date</th>
              <th>Total hours</th>
              <th>Gross pay</th>
              <th>Options</th>
            </tr>
            <tr className="table-row">
              <td>2023-10-01</td>
              <td>Jhon Doe</td>
              <td>2023-10-01</td>
              <td>2023-10-01</td>
              <td>12.00</td>
              <td>12500</td>
              <td>
                <div className="table-option">
                  <button className="edit-btn">
                    <img src={editIcon} width="30px" />
                  </button>
                  <button className="delete-btn">
                    <img src={deleteIcon} width="30px" />
                  </button>
                </div>
              </td>
            </tr>
            <tr className="table-row">
              <td>2023-10-01</td>
              <td>Jhon Doe</td>
              <td>2023-10-01</td>
              <td>2023-10-01</td>
              <td>12.00</td>
              <td>12500</td>
              <td>
                <div className="table-option">
                  <button className="edit-btn">
                    <img src={editIcon} width="30px" />
                  </button>
                  <button className="delete-btn">
                    <img src={deleteIcon} width="30px" />
                  </button>
                </div>
              </td>
            </tr>
            <tr className="table-row">
              <td>2023-10-01</td>
              <td>Jhon Doe</td>
              <td>2023-10-01</td>
              <td>2023-10-01</td>
              <td>12.00</td>
              <td>12500</td>
              <td>
                <div className="table-option">
                  <button className="edit-btn">
                    <img src={editIcon} width="30px" />
                  </button>
                  <button className="delete-btn">
                    <img src={deleteIcon} width="30px" />
                  </button>
                </div>
              </td>
            </tr>
            <tr className="table-row">
              <td>2023-10-01</td>
              <td>Jhon Doe</td>
              <td>2023-10-01</td>
              <td>2023-10-01</td>
              <td>12.00</td>
              <td>12500</td>
              <td>
                <div className="table-option">
                  <button className="edit-btn">
                    <img src={editIcon} width="30px" />
                  </button>
                  <button className="delete-btn">
                    <img src={deleteIcon} width="30px" />
                  </button>
                </div>
              </td>
            </tr>
          </table>
        </div>
        <button
          className="btn-download"
          onClick={() => navigator("/payroll/add")}
        >
          + Add new
        </button>
      </div>
    </div>
  );
};
