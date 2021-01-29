import React, { ReactElement, useEffect, useState } from "react"
import { BrowserRouter as Router } from "react-router-dom"
import Layout from "antd/lib/layout"
import Menu from "antd/lib/menu"
import { Routes } from "./Routes"
import "antd/dist/antd.css"
import "./App.scss"
import { QueryClient, QueryClientProvider } from "react-query"

const { Header, Content, Footer } = Layout
const queryClient = new QueryClient()

export const App: React.FC = (): ReactElement => {
  const [date, setDate] = useState(0)
  const getYear = () => setDate(new Date().getFullYear())

  useEffect(() => {
    getYear()
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Layout className="layout">
          <Header>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1">Watch list</Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: "0 50px" }}>
            <div className="siteLayoutContent">
              <Routes />
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>&copy;{date} - My Watch Collection</Footer>
        </Layout>
      </Router>
    </QueryClientProvider>
  )
}
