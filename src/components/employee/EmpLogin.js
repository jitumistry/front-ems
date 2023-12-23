import React, { useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { NavLink, useNavigate } from 'react-router-dom';
import styles from './employee.module.css';
import './styles.css';
import axios from 'axios';

const EmpLogin = () => {
  const [name, setname] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()


  const submitHandler = (e) => {
    e.preventDefault();
    if (name === '' && password === '') {
      alert('Please input your Username & Password')
    }
    else {
      axios.post('https://ems-backend-txx3.onrender.com/auth/login', { name, password })
        .then(res => {
          if (res.data === 'success') {
            navigate('/employeedashbord')
          }
          else {
            alert(res.data)
          }
        })
        .catch(err => {
          console.log(err);
        })
    }
  }
  const viewHandler = (e) => {
    alert('Create New Account')
  }
  return (
    <>
      <div className={styles.login}>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <div className={styles.lpage}>
                <Form
                  name="normal_login"
                  className="login-form"
                  initialValues={{
                    remember: true,
                  }}
                >
                  <Form.Item
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your Username!',
                      },
                    ]}
                  >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" value={name} onChange={(e) => { setname(e.target.value) }} />
                  </Form.Item>
                  <Form.Item
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your Password!',
                      },
                    ]}
                  >
                    <Input
                      prefix={<LockOutlined className="site-form-item-icon" />}
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => { setPassword(e.target.value) }}
                    />
                  </Form.Item>
                  <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                      <Checkbox className='float-start'>Remember me</Checkbox>
                    </Form.Item>
                    <NavLink className="login-form-forgot" onClick={viewHandler} >
                      Forgot password
                    </NavLink>
                  </Form.Item>
                  <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button" onClick={(e) => submitHandler(e)}>
                      Log in
                    </Button>
                    Or <NavLink to={'/registration'}>register now!</NavLink>
                  </Form.Item>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EmpLogin