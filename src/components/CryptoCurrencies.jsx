import {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../services/cryptoApi';
import { Card, Row, Col , Typography,  Input} from 'antd';
import { Link } from 'react-router-dom';
import millify from 'millify';

const CryptoCurrencies = () => {
  const { data: cryptoList, status } = useSelector((state) => state.cryptoApi)
  
  const dispatch = useDispatch()
  
  const {Title} = Typography;

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch])

  const [cryptos, setCryptos] = useState([cryptoList?.data?.coins])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect (() => {
     const filteredData = cryptoList?.data?.coins.filter((coin) => coin.name?.toLowerCase().includes(searchTerm.toLowerCase()) )
     setCryptos(filteredData)
  }, [cryptoList, searchTerm])

  
  
  return (
    <>
    <Title level={2} className='heading' >
        Global Crypto Currencies
    </Title>
  
     <div className='search-crypto'>
     <Input placeholder='Search cryprocurrencies' onChange={(e) => setSearchTerm(e.target.value)} />
     </div>
    <Row gutter={[32, 32]} className='crypto-card-cointainer'>
        
        {cryptos?.map((coin) => (
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
  )
}

export default CryptoCurrencies