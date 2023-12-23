import React, { useEffect, useState } from 'react';
import style from './admin.module.css';
import './admin.css'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const EmpSheet = () => {
    const { key } = useParams()
    const [data, setData] = useState([])
    const [count, setCount] = useState(0)
    useEffect(() => {
        axios.get(`https://ems-backend-txx3.onrender.com/timesheet/data/${key}`)
            .then(res => {
                setData(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [key])
    return (
        <>
            <div className='container-fluid'>
                <h4 className='mt-2 mb-0'>Dashbord</h4>
                <div className={style.box}>
                    <div>
                        <h6>Employee Attendance</h6>
                        <hr />
                        <div>
                            <table className="table align-middle table-striped">
                                <thead>
                                    <tr className='align-middle'>
                                        <th scope="col">#</th>
                                        <th scope="col">Emp.Code</th>
                                        <th scope="col">Emp.Name</th>
                                        <th scope="col">Emp.Role</th>
                                        <th scope="col">Emp.Level</th>
                                        <th scope="col">Emp.Department</th>
                                        <th scope="col">ETS Direct Manager/Supervisor</th>
                                        <th scope="col">Executive Level</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Hours Worked</th>
                                        <th scope="col">Department Code</th>
                                        <th scope="col">Project Code</th>
                                        <th scope="col">Activity Code</th>
                                        <th scope="col">Resource Code</th>
                                        <th scope="col">Product Code</th>
                                        <th scope="col">Project Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data.map((em, count) => {
                                            return (
                                                <tr key={em._id} className='align-middle'>
                                                    <th scope="row">{count + 1}</th>
                                                    <td>{em.code}</td>
                                                    <td>{em.name}</td>
                                                    <td>{em.role}</td>
                                                    <td>{em.level}</td>
                                                    <td>{em.dpt}</td>
                                                    <td>{em.manager}</td>
                                                    <td>{em.elevel}</td>
                                                    <td>{em.dat}</td>
                                                    <td>{em.hours}</td>
                                                    <td>{em.dcode}</td>
                                                    <td>{em.pcode}</td>
                                                    <td>{em.acode}</td>
                                                    <td>{em.rcode}</td>
                                                    <td>{em.prcode}</td>
                                                    <td>{em.pdes}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div >
            </div>
        </>
    )
}

export default EmpSheet