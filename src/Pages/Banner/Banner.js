import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import bannerBg from "../../Images/banner/bannerbackground.png";
import SearchItem from '../SearchItem/SearchItem';
import './Banner.css';

const Banner = () => {
    
    const [foods,setFoods] = useState([]);
    const [matchedFood , setMatchedFood] = useState([]);
    useEffect(()=>{
        fetch('/foodsDetails.json')
        .then(res => res.json())
        .then(data => {
            setFoods(data)
            setMatchedFood(data);
        })
    },[])

    const handleSearch =(e)=>{
        const searchValue = e.target.value.toLowerCase();
        const searchResult = foods.filter(food => food.name.toLowerCase().includes(searchValue))
        setMatchedFood(searchResult);
    } 
    return (
        <div>
            <Row>
               <Col>
               <div className="banner">
                <img src={bannerBg} alt="" />
                <div className="search">
                    <h1>Best food waiting for your belly</h1>
                    <input onChange={handleSearch} type="text" placeholder="Search your meal" />
                    <button>search</button>
                </div>
               </div>
               </Col>
            </Row>
            <Container>
            <h2 className="my-5 text-white text-center">Our Meals</h2>
            <Row>
            {
                matchedFood.map(matchItem => <SearchItem key={matchItem.id} matchItem={matchItem}></SearchItem>)
            }
            </Row>
            </Container>
        </div>
    );
};

export default Banner;