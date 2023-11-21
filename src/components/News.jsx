import { useEffect, useState } from 'react'
import { Select, Typography, Row, Col, Avatar, Card } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { fetchNews } from '../services/cryptoNew'

const News = () => {

const {Text, Title } = Typography
const { Option} = Select

const { data: cryptoNews, status } = useSelector((state) => state.cryptoNewsApi);
const dispatch = useDispatch()

const [ news, setNews ] = useState([cryptoNews]);


useEffect(() => {

  dispatch(fetchNews())

}, [dispatch]);


  return (
    <>
      <Title level={2} className='heading' >
        Global Crypto News
      </Title>
          <Row gutter={[24, 24]}>
          {news[0].map((newsToday, i) => (
            <Col xs={24} sm={12} lg={6} key={i}>
              <Card hoverable className='news-card'>
                <a href={newsToday.link} target='_blank' rel='noreferrer'>
                   <div className='news-image-container'>
                   <Title className='news-title' level={5}>
                     {newsToday.title}
                   </Title>               
                   </div>
                   <img src = {newsToday?.image} alt="news image" width={300}  />
                   <Title level={5}>{`${newsToday.publishedAt}`}</Title>
                   <Title level={5}>{`Published at : ${newsToday.sourceName}`}</Title>
                </a>
              </Card>
            </Col>
          ))} 
          </Row>    
    </>
  )
}

export default News

