import React, { useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import style from './admin.module.css';
import './admin.css'

const AdminLogin = () => {
    const [admin, setAdmin] = useState('')
    const [adminpsw, setAdminpsw] = useState('')
    const navigate = useNavigate()
    const submitHandler = () => {
        axios.post('https://ems-backend-txx3.onrender.com/admin/auth', { admin, adminpsw })
            .then(res => {
                if (res.data === 'success') {
                    navigate('/admindashbord')
                }
                else {
                    alert(res.data)
                }
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <div className={style.loginform}>
            <Form
                name="normal_login"
                className="login-form"
                onFinish={submitHandler}
                initialValues={{
                    remember: true,
                }}
            >
                <h3 className='mb-3'>Admin</h3>
                <Form.Item
                    name="admin"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Admin Name!',
                        },
                    ]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Admin" value={admin} onChange={(e) => { setAdmin(e.target.value) }} />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Admin Password!',
                        },
                    ]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                        value={adminpsw}
                        onChange={(e) => { setAdminpsw(e.target.value) }}
                    />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default AdminLogin