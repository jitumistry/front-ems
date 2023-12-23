import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../employee/Home'
import EmpLogin from '../employee/EmpLogin'
import EmployeeDb from '../employee/EmployeeDb'
import Dashbord from '../employee/Dashbord'
import ApplyLeave from '../employee/ApplyLeave'
import LeaveStatus from '../employee/LeaveStatus'
import Time from '../employee/Time'
import Registration from '../employee/Registration'
import AdminLogin from '../admin/AdminLogin'
import AdminDashbord from '../admin/AdminDashbord'
import Dash from '../admin/Dash'
import EmpTime from '../admin/EmpTime'
import EmpLeave from '../admin/EmpLeave'
import EmpSheet from '../admin/EmpSheet'

const RoutPaths = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<EmpLogin />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/employeedashbord' element={<EmployeeDb />}>
          <Route path='' element={<Dashbord />} />
          <Route path='timesheet' element={<Time />} />
          <Route path='applyleave' element={<ApplyLeave />} />
          <Route path='leavestatus' element={<LeaveStatus />} />
        </Route>
        <Route path='/admin' element={<AdminLogin />} />
        <Route path='/admindashbord' element={<AdminDashbord />}>
          <Route path='' element={<Dash />} />
          <Route path='emptimesheet' element={<EmpTime />} />
          <Route path='empleave' element={<EmpLeave />} />
          <Route path='data/:key' element={<EmpSheet />} />
        </Route>
      </Routes>
    </>
  )
}

export default RoutPaths