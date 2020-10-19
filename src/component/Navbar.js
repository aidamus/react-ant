import React from 'react';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

const Navbar = () =>{
    return (
        <Layout>
            <Menu theme="dark" mode="horizontal">
                <Menu.Item key="1" ><Link to="/home">Home</Link></Menu.Item>
                <Menu.Item key="2"><Link to="/about">About</Link></Menu.Item>
                <Menu.Item key="3"><Link to="/contact">Contact</Link></Menu.Item>
                <Menu.Item key="4" style={{float: 'right'}}><Link to="/signin">Sign In</Link></Menu.Item>
            </Menu>
        </Layout>
    )

}

export default Navbar;
