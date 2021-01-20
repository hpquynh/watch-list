import React, {ReactElement} from 'react'
import {
    BrowserRouter as Router
} from 'react-router-dom'
import {Layout} from 'antd'
import { Routes } from '../Routes'
import 'antd/dist/antd.css'
import './style.scss'

const {Header, Content, Footer} = Layout;

export const App: React.FC = (): ReactElement => {
    return (
        <Router>
            <Layout className="layout">
                <Header>Hehe</Header>
                <Content style={{padding: '0 50px'}}>
                    <div className="site-layout-content">
                        <Routes />
                    </div>
                </Content>
                <Footer style={{textAlign: 'center'}}>My Watch Collection ©2020</Footer>
            </Layout>
        </Router>
    )
};