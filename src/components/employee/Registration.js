import React, { useState } from 'react';
import { LockOutlined, UserOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import styles from './employee.module.css';
import './styles.css';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  const [uname, setUname] = useState('')
  const [psw, setPsw] = useState('')
  const [email, setEmail] = useState('')
  const navigate = useNavigate()
  const submitHandler = (e) => {
    e.preventDefault();
    axios.post('https://ems-backend-txx3.onrender.com/auth', { uname, psw, email })
      .then(res => {
        alert('Registered successfully')
        navigate('/login')
      })
      .catch(err => {
        console.log(err);
      })
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
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" value={uname} onChange={(e) => { setUname(e.target.value) }} />
                  </Form.Item>
                  <Form.Item
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your Email!',
                      },
                    ]}
                  >
                    <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
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
                      value={psw}
                      onChange={(e) => { setPsw(e.target.value) }}
                    />
                  </Form.Item>
                  <Form.Item
                    name="confirm"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                      {
                        required: true,
                        message: 'Please confirm your password!',
                      },
                      ({ getFieldValue }) => ({
                        validator(_, value) {
                          if (!value || getFieldValue('password') === value) {
                            return Promise.resolve();
                          }
                          return Promise.reject(new Error('The new password that you entered do not match!'));
                        },
                      }),
                    ]}
                  >
                    <Input.Password placeholder='Confirm Password' prefix={<LockOutlined className="site-form-item-icon" />} />
                  </Form.Item>

                  <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button" onClick={(e) => submitHandler(e)} >
                      Register
                    </Button>
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

export default Registration