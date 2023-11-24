import { useEffect, useState } from 'react'
import { Select, Typography, Row, Col, Avatar, Card } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { fetchNews } from '../services/cryptoNew'
import 'ldrs/ring2'

const News = () => {

const {Text, Title } = Typography
const { Option} = Select

const { data: cryptoNews } = useSelector((state) => state.cryptoNewsApi);
const dispatch = useDispatch()

const [ cryptos, setNews ] = useState([cryptoNews]);

  
  useEffect(() => {
  dispatch(fetchNews())
  }, [dispatch]);

  return (
    <>
      <Title level={2} className='heading' >
        Global Crypto News
      </Title>
          {cryptos?.length > 0 ? (
          <Row gutter={[24, 24]}>
          {cryptos?.map((news, i) => (
            <Col xs={24} sm={12} lg={6} key={i}>
              <Card hoverable className='news-card'>
                <a href={news.url} target='_blank' rel='noreferrer'>
                   <div className='news-image-container'>
                   <Title className='news-title' level={5}>
                     {news.title}
                   </Title>               
                   </div>
                   <Title level={5}>{news.body}</Title>
                   <Title level={5}>{`Published at : ${news.date}`}</Title>
                </a>
              </Card>
            </Col>
          ))} 
          </Row>    
          ) : (
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

export default News

