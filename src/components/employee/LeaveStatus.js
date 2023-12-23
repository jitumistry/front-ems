import React, { useEffect, useState } from 'react';
import styles from './employee.module.css';
import { SyncOutlined } from '@ant-design/icons';
import axios from 'axios';

const LeaveStatus = () => {
  const [data, setData] = useState([])
  const [counter, setCounter] = useState(0)
  useEffect(() => {
    axios.get('https://ems-backend-txx3.onrender.com/applyleave')
      .then(res => {
        setData(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
  return (
    <>
      <div className='container-fluid'>
        <h4 className='mt-2 mb-0'>Leave Status</h4>
        <div className={styles.box}>
          <div>
            <h6>Checking Status ... <span> <SyncOutlined spin /></span></h6>
            <hr />
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Emp.Name</th>
                  <th scope="col">Form Date</th>
                  <th scope="col">To Date</th>
                  <th scope="col">Status</th>
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

export default LeaveStatus