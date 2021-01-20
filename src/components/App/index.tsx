import React, {ReactElement, useEffect, useState} from 'react'
import {
    BrowserRouter as Router
} from 'react-router-dom';
import Layout from 'antd/lib/layout';
import Menu from 'antd/lib/menu';
import { Routes } from '../Routes';
import 'antd/dist/antd.css';
import './index.scss';

const {Header, Content, Footer} = Layout;

export const App: React.FC = (): ReactElement => {
    const [date , setDate] = useState();
    const getYear = () =>  setDate(new Date().getFullYear())

    useEffect(() => {
        getYear();
    }, []);

    return (
        <Router>
            <Layout className="layout">
                <Header>
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">Watch list</Menu.Item>
                    </Menu>
                </Header>
                <Content style={{padding: '0 50px'}}>
                    <div className="site-layout-content">
                        <Routes />
                    </div>
                </Content>
                <Footer style={{textAlign: 'center'}}>&copy;{date} - My Watch Collection</Footer>
            </Layout>
        </Router>
    )
};