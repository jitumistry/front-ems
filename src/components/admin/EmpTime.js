import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input, Button } from 'antd';
import style from './admin.module.css';
import './admin.css'
import axios from 'axios';

const EmpTime = () => {
  const [code, setCode] = useState('')
  const [name, setName] = useState('')
  const [role, setRole] = useState('')
  const navigate = useNavigate()
  const submitHandler = (e) => {
    e.preventDefault();
    axios.post(`https://ems-backend-txx3.onrender.com/timesheet/check`, { code, name, role })
      .then(res => {
        let key = res.data[0].code
        navigate(`../data/${key}`)
      })
      .catch(err => {
        console.log(err);
      })
  }
  return (
    <>
      <div className='container-fluid'>
        <h4 className='mt-2 mb-0'>Dashbord</h4>
        <div className={style.box}>
          <div>
            <h6>Employee Attendance</h6>
            <hr />
            <form>
              <div className='container-fluid'>
                <div className='row'>
                  <div className='col-md-4'>
                    <div className='mb-2'>
                      <p>Emp.Code</p>
                      <Input className='mb-2' value={code} onChange={(e) => setCode(e.target.value)} />
                    </div>
                  </div>
                  <div className='col-md-4'>
                    <div className='mb-2'>
                      <p>Emp.Name</p>
                      <Input className='mb-2' value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                  </div>
                  <div className='col-md-4'>
                    <div className='mb-2'>
                      <p>Emp.Role</p>
                      <Input className='mb-2' value={role} onChange={(e) => setRole(e.target.value)} />
                    </div>
                    <div className='mt-2 float-end'>
                      <Button type="primary" onClick={submitHandler}>Submit</Button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div >
      </div>
    </>
  )
}

export default EmpTime