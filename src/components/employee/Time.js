import React, { useState } from 'react';
import styles from './employee.module.css';
import { Input, Button, DatePicker } from 'antd';
import axios from 'axios';

const Time = () => {
  const [code, setCode] = useState('')
  const [level, setLevel] = useState('')
  const [elevel, setElevel] = useState('')
  const [dcode, setDcode] = useState('')
  const [rcode, setRcode] = useState('')
  const [name, setName] = useState('')
  const [dpt, setDpt] = useState('')
  const [dat, setDob] = useState(null)
  const [pcode, setPcode] = useState('')
  const [prcode, setPrcode] = useState('')
  const [role, setRole] = useState('')
  const [manager, setManeger] = useState('')
  const [hours, setHours] = useState('')
  const [acode, setAcode] = useState('')
  const [pdes, setPdes] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    if (code === '' || level === '' || elevel === '' || dcode === '' || rcode === '' || name === '' || dpt === '' || dat === '' || pcode === '' || prcode === '' || role === '' || manager === '' || hours === '' || acode === '' || pdes === '') {
      alert('fill the data')
    }
    else {
      axios.post('https://ems-backend-txx3.onrender.com/timesheet', { code, level, elevel, dcode, rcode, name, dpt, dat, pcode, prcode, role, manager, hours, acode, pdes })
        .then(res => {
          alert('Data Addad')
          setCode('');
          setLevel('');
          setElevel('');
          setDcode('');
          setRcode('');
          setName('');
          setDpt('');
          setDob('');
          setPcode('');
          setPrcode('');
          setRole('');
          setManeger('');
          setHours('');
          setAcode('');
          setPdes('');
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
  /* const onChange = (value) => {
     const y = moment(value).format('YYYY-MM-DD')
     console.log(y)
     setDate(y)
   };*/
  return (
    <>
      <div className='container-fluid'>
        <h4 className='mt-2 mb-0'>Dashbord</h4>
        <div className={styles.box}>
          <div>
            <h6>Employee Attendance</h6>
            <hr />
            <form>
              <div className='container-fluid'>
                <div className='row'>
                  <div className='col-md-4'>
                    <div className='mb-2'>
                      <p>Emp.Code</p>
                      <Input className='mb-2' value={code} onChange={(e) => { setCode(e.target.value) }} />
                    </div>
                    <div className='mb-2'>
                      <p>Emp.Level</p>
                      <select className="form-select mb-2" aria-label="Default select example" value={level} onChange={(e) => { setLevel(e.target.value) }}>
                        <option selected>select</option>
                        <option >Jr.</option>
                        <option >Mid</option>
                        <option >Senior</option>
                        <option >Lead</option>
                      </select>
                    </div>
                    <div className='mb-2'>
                      <p>Executive Level</p>
                      <Input className='mb-2' value={elevel} onChange={(e) => { setElevel(e.target.value) }} />
                    </div>
                    <div className='mb-2'>
                      <p>Department Code</p>
                      <input className="form-control mb-2" list="datalistOptions" id="exampleDataList" value={dcode} onChange={(e) => { setDcode(e.target.value) }} />
                      <datalist id="datalistOptions">
                        <option value="0001" />
                        <option value="0002" />
                        <option value="0003" />
                        <option value="0004" />
                        <option value="0005" />
                      </datalist>
                    </div>
                    <div className='mb-2'>
                      <p>Resource Code</p>
                      <input className="form-control mb-2" list="resourceOptions" id="exampleDataList" value={rcode} onChange={(e) => { setRcode(e.target.value) }} />
                      <datalist id="resourceOptions">
                        <option value="12" />
                        <option value="63" />
                        <option value="56" />
                        <option value="71" />
                        <option value="92" />
                      </datalist>
                    </div>
                  </div>
                  <div className='col-md-4'>
                    <div className='mb-2'>
                      <p>Emp.Name</p>
                      <Input className='mb-2' value={name} onChange={(e) => { setName(e.target.value) }} />
                    </div>
                    <div className='mb-2'>
                      <p>Emp.Department</p>
                      <Input className='mb-2' value={dpt} onChange={(e) => { setDpt(e.target.value) }} />
                    </div>
                    <div className='mb-2'>
                      <p>Date</p>
                      <DatePicker className='mb-2' onChange={(value) => {
                        setDob(value.format('DD-MM-YYYY'))
                      }} />
                    </div>
                    <div className='mb-2'>
                      <p>Project Code</p>
                      <input className="form-control mb-2" list="projectOptions" id="exampleDataList" value={pcode} onChange={(e) => { setPcode(e.target.value) }} />
                      <datalist id="projectOptions">
                        <option value="12345" />
                        <option value="23456" />
                        <option value="34567" />
                        <option value="45678" />
                        <option value="56789" />
                      </datalist>
                    </div>
                    <div className='mb-2'>
                      <p>Product Code</p>
                      <input className="form-control mb-2" list="productOptions" id="exampleDataList" value={prcode} onChange={(e) => { setPrcode(e.target.value) }} />
                      <datalist id="productOptions">
                        <option value="11223" />
                        <option value="22325" />
                        <option value="33177" />
                        <option value="56158" />
                        <option value="33065" />
                      </datalist>
                    </div>
                  </div>
                  <div className='col-md-4'>
                    <div className='mb-2'>
                      <p>Emp.Role</p>
                      <Input className='mb-2' value={role} onChange={(e) => { setRole(e.target.value) }} />
                    </div>
                    <div className='mb-2'>
                      <p>ETS Direct Manager/Supervisor</p>
                      <Input className='mb-2' value={manager} onChange={(e) => { setManeger(e.target.value) }} />
                    </div>
                    <div className='mb-2'>
                      <p>Hours Worked</p>
                      <input className="form-control mb-2" list="hoursOptions" id="exampleDataList" value={hours} onChange={(e) => { setHours(e.target.value) }} />
                      <datalist id="hoursOptions">
                        <option value="1" />
                        <option value="2" />
                        <option value="3" />
                        <option value="4" />
                        <option value="5" />
                        <option value="6" />
                        <option value="7" />
                        <option value="8" />
                        <option value="9" />
                        <option value="10" />
                        <option value="11" />
                        <option value="12" />
                      </datalist>
                    </div>
                    <div className='mb-2'>
                      <p>Activity Code</p>
                      <input className="form-control mb-2" list="activityOptions" id="exampleDataList" value={acode} onChange={(e) => { setAcode(e.target.value) }} />
                      <datalist id="activityOptions">
                        <option value="112" />
                        <option value="223" />
                        <option value="331" />
                        <option value="561" />
                        <option value="330" />
                      </datalist>
                    </div>
                    <div className='mb-2'>
                      <p>Project Description</p>
                      <Input className='mb-2' value={pdes} onChange={(e) => { setPdes(e.target.value) }} />
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col'>
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


export default Time