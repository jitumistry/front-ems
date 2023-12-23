import React, { useEffect, useState } from 'react';
import style from './admin.module.css';
import { SyncOutlined } from '@ant-design/icons';
import './admin.css'
import axios from 'axios';

const EmpLeave = () => {
  const [data, setData] = useState([])
  const [counter, setCounter] = useState(0)
  const [status, setStatus] = useState('pending')
  useEffect(() => {
    axios.get('https://ems-backend-txx3.onrender.com/applyleave')
      .then(res => {
        setData(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
  const changeHandler = (id) => {
    axios.post(`https://ems-backend-txx3.onrender.com/applyleave/updatestatus/${id}`)
      .then(res => {
        alert('Approved Successfully')
        setStatus('Approved')
      })
      .catch(err => {
        console.log(err);
      })
  }
  return (
    <>
      <div className='container-fluid'>
        <h4 className='mt-2 mb-0'>Leave Status</h4>
        <div className={style.box}>
          <div>
            <h6>Checking Status ... <span> <SyncOutlined spin /></span></h6>
            <hr />
            <table className="table overflow-auto">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Emp.Name</th>
                  <th scope="col">Form Date</th>
                  <th scope="col">To Date</th>
                  <th scope="col">Status</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {
                  data.map((tab, counter) => {
                    return (
                      <tr key={tab._id}>
                        <th scope="row">{counter + 1}</th>
                        <td>{tab.name}</td>
                        <td>{tab.dates[0]}</td>
                        <td>{tab.dates[1]}</td>
                        <td>{tab.status}</td>
                        <td><button className='btn btn-outline-dark btn-sm' onClick={() => changeHandler(tab._id)} disabled={status === 'approved'}>Aprove</button></td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default EmpLeave