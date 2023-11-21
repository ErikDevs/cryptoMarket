import { Layout, Typography, Space } from "antd";
import Navpage from './components/Navpage';
import Homepage from './components/Homepage';
import Exchanges from './components/Exchanges';
import CryptoCurrencies from './components/CryptoCurrencies';
import CryptoDetails from './components/CryptoDetails';
import News from './components/News';
import './App.css';
import {Routes, Route, Link } from "react-router-dom";

function App() {
  return ( 
    <div className="app">
        <div className="navbar">
            <Navpage />
        </div>
        <div className="main">
          <Layout>
            <div className="routes">
               <Routes>
                   <Route path="/" element= {<Homepage />} />
                   <Route path="/exhanges" element = {<Exchanges />} />
                   <Route path="/cryptocurrencies" element = {<CryptoCurrencies />} />
                   <Route path="/crypto/:coinId" element = {<CryptoDetails />} />
                   <Route path="/news" element = {<News />} />
               </Routes>
            </div>
          </Layout>
        <div className="footer">
          <Typography.Title level={4} style={{color: "white", textAlign: "center"}}>
            Cryptoverce <br />
            All rights reserved
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
        </div>   
    </div>
  )
}

export default App
