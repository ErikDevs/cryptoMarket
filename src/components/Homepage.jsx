import { useEffect, useState } from 'react';
import millify from 'millify';
import { Typography, Card, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../services/cryptoApi';
import 'ldrs/ring2'

const {Title} = Typography;

const Homepage = () => {

  const { data } = useSelector((state) => state.cryptoApi)
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch])

 
  const globalCoins = data?.data?.coins;
  const globalStats = data?.data?.stats;
  const minimized = globalCoins?.slice(0, 10);

  return (
   <> 
   <Title level={2} className='heading' >
        Global Crypto Statistics
   </Title>
      {minimized?.length > 0 ? ( 
        <>
        <Row>
        <Col span={12} ><Statistic title = "Total Cryptocurrencies" value={globalStats?.total} /></Col>
        <Col span={12} ><Statistic title = "Total Exchanges" value={millify(globalStats?.totalExchanges)} /></Col>
        <Col span={12} ><Statistic title = "Total Market Cap" value={millify(globalStats?.totalMarketCap)} /></Col>
        <Col span={12} ><Statistic title = "Total 24 hour Volume" value={millify(globalStats?.total24hVolume)} /></Col>
        <Col span={12} ><Statistic title = "Total Markets" value={millify(globalStats?.totalMarkets)} /></Col> 
        </Row>
        <div className='home-heading-container'>
        <Title level={2} className='home-title'> 
        Top 10 cryptocurrencies in the world </Title>
        <Title level={4} className='show-more'>
        <Link to="/cryptocurrencies">Show more</Link></Title>
     </div>
     <Row gutter={[32, 32]} className='crypto-card-cointainer'>
        
        {minimized?.map((coin) => (
           <Col xs={24} sm={12} lg={6} className='crypto-card' key={coin.id}>
           <Link to= {`/crypto/${coin.id}`}>
                <Card 
                   title= {`${coin.rank}.${coin.name}`}
                   extra= {<img className='crypto-image' src= {coin.iconUrl}/>}
                   hoverable>
                  <p>Price: {millify(coin.price)}</p>
                  <p>Market Cap: {millify(coin.marketCap)}</p>
                  <p>Daily Exchange: {millify(coin.change)}</p>
                </Card>
           </Link>
        </Col>
        ))}
           
    </Row>  
       </>
      ): (
        <div style={{justifyContent: "center", display: "flex"}}>
             <l-ring-2
              size="30"
              stroke="5"
              stroke-length="0.25"
              bg-opacity="0.1"
              speed="0.8"
              color="black" 
            ></l-ring-2>
        </div>
      )}  
     
   </>
  )
}

export default Homepage