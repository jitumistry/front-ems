import React, { useEffect, useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    CarryOutOutlined,
    UserOutlined,
    AuditOutlined,
    FormOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const { Header, Sider, Content, Footer } = Layout;

const EmployeeDb = () => {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate();
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout className='full-screen'>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="demo-logo-vertical" />
                <h3>EMS</h3>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['']}
                    onClick={({ key }) => {
                        if (key === 'nothing') {
                            //do nothing
                        }
                        else {
                            navigate(key)
                        }
                    }}
                    items={[
                        {
                            key: '',
                            icon: <UserOutlined />,
                            label: 'Dashbord',
                        },
                        {
                            key: 'timesheet',
                            icon: <FormOutlined />,
                            label: 'Time Sheet',
                        },
                        {
                            key: 'applyleave',
                            icon: <AuditOutlined />,
                            label: 'Apply Leave',
                        },
                        {
                            key: 'leavestatus',
                            icon: <CarryOutOutlined />,
                            label: 'Leave Status',
                        },
                    ]}
                >
                </Menu>
            </Sider>
            <Layout>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                </Header>
                <Content
                    style={{
                        minHeight: 280,
                        background: colorBgContainer,
                    }}
                >
                    <Outlet />
                </Content>
                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    Design ©2023 Created by Jitu Mistry
                </Footer>
            </Layout>
        </Layout>
    );
}

export default EmployeeDb