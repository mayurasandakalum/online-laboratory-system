import '../../styles/view-appoinment-style.css'
import deleteIcon from '../../assets/icons8-delete-document-48.png'
import editIcon  from '../../assets/icons8-edit-property-48.png'
import {useNavigate} from 'react-router-dom'

export const ViewAppoinment = () => {
    const navigator = useNavigate();


    return (
        <div className="">
            <div className='page-container'>
                <div className='header-container'>
                    <h1 className='page-title'>Appoinments List</h1>
                    <div className='search-wrapper'>
                        <input className='search-input' type='search' placeholder='Search'/>
                        <button className='btn-search'>Search</button>
                    </div>
                </div>
                <div className='table-container'>
                    <table className='table'>
                       <tr className="table-row-head">
                        <th>Ref No</th>
                        <th>E-mail</th>
                        <th>Phone Number</th>
                        <th>Name</th>
                        <th>Doctor</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Payment Method</th>
                        <th>Options</th>
                       </tr>
                       <tr className="table-row">
                        <td>1</td>
                        <td>sadasd@asd.asd</td>
                        <td>0771234567</td>
                        <td>John Doe</td>
                        <td>Dr. John Doe</td>
                        <td>2021-09-09</td>
                        <td>12.00</td>
                        <td>Card</td>
                        <td>
                            <div className='table-option'>
                                <button className='edit-btn'><img src={editIcon} width='30px'/></button>
                                <button className='delete-btn'><img src={deleteIcon}  width='30px'/></button>
                            </div>
                        </td>
                       </tr>
                       <tr className="table-row">
                        <td>1</td>
                        <td>sadasd@asd.asd</td>
                        <td>0771234567</td>
                        <td>John Doe</td>
                        <td>Dr. John Doe</td>
                        <td>2021-09-09</td>
                        <td>12.00</td>
                        <td>Card</td>
                        <td>
                            <div className='table-option'>
                                <button className='edit-btn'><img src={editIcon} width='30px'/></button>
                                <button className='delete-btn'><img src={deleteIcon} width='30px'/></button>
                            </div>
                        </td>
                       </tr>
                       <tr className="table-row">
                        <td>1</td>
                        <td>sadasd@asd.asd</td>
                        <td>0771234567</td>
                        <td>John Doe</td>
                        <td>Dr. John Doe</td>
                        <td>2021-09-09</td>
                        <td>12.00</td>
                        <td>Card</td>
                        <td>
                            <div className='table-option'>
                                <button className='edit-btn'><img src={editIcon} width='30px'/></button>
                                <button className='delete-btn'><img src={deleteIcon} width='30px'/></button>
                            </div>
                        </td>
                       </tr>
                    </table>
                </div>
                <button className='btn-download' onClick={() => navigator('/appointment/add')}>+ Add new</button>
            </div>            
        </div>
    )
}
 