import React, { useState } from 'react';
import styles from './employee.module.css';
import { Input, DatePicker, Button } from 'antd';
import axios from 'axios'
const { RangePicker } = DatePicker;
const { TextArea } = Input;

const ApplyLeave = () => {
  const [code, setCode] = useState('')
  const [name, setName] = useState('')
  const [designation, setDesignation] = useState('')
  const [dates, setDates] = useState([])
  const [description, setdescription] = useState('')
  const [status, setStatus] = useState('pending')


  const submitHandler = (e) => {
    e.preventDefault()
    if (code === '' || name === '' || designation === '' || dates === '' || description === '') {
      alert('Please Enter Input');
    }
    else {
      axios.post('https://ems-backend-txx3.onrender.com/applyleave', { code, name, designation, dates, description, status })
        .then(res => {
          alert('Application Send')
          setCode('')
          setName('')
          setDesignation('')
          setDates('')
          setdescription('')
        })
        .catch(err => {
          console.log(err);
        })
    }
  }
  return (
    <>
      <div className='container-fluid'>
        <h4 className='mt-2 mb-0'>Apply Leave</h4>
        <div className={styles.box}>
          <div>
            <h6>Apply Form</h6>
            <hr />
            <form>
              <div className='container-fluid'>
                <div className='row'>
                  <div className='col-md-4'>
                    <div className='mb-2'>
                      <p>Emp.Code</p>
                      <Input className='mb-3' onChange={(e) => setCode(e.target.value)} value={code} />
                    </div>
                  </div>
                  <div className='col-md-4'>
                    <div className='mb-2'>
                      <p>Emp.Name</p>
                      <Input className='mb-3' onChange={(e) => setName(e.target.value)} value={name} />
                    </div>
                  </div>
                  <div className='col-md-4'>
                    <div className='mb-2'>
                      <p>Emp.Designation</p>
                      <Input className='mb-3' onChange={(e) => setDesignation(e.target.value)} value={designation} />
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col'>
                    <div className='mb-2'>
                      <p>From Date - To Date</p>
                      <RangePicker className='mb-4' onChange={(rangeValue) => {
                        setDates([rangeValue[0].format('YYYY-MM-DD'), rangeValue[1].format('YYYY-MM-DD')])
                      }} />
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col'>
                    <div className='mb-3'>
                      <p>Description</p>
                      <TextArea
                        showCount
                        maxLength={100}
                        placeholder='Leave Request Massage...'
                        value={description}
                        onChange={(e) => setdescription(e.target.value)}
                        style={{
                          height: 120,
                          resize: 'none',
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col'>
                    <div className='mt-4 float-end'>
                      <Button type="primary" onClick={submitHandler}>Submit</Button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default ApplyLeave