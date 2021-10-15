import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";

const FoodDetails = () => {
    const {foodId} = useParams();
    const [foods,setFoods] = useState([]);
    const [singleFood ,setSingleFood] = useState({});

    useEffect(()=>{
        fetch('/foodsDetails.json')
        .then(res => res.json())
        .then(data => setFoods(data))
    },[])

    useEffect(()=>{
        const getFood = foods.find(food => food.id === foodId);
        setSingleFood(getFood);
    },[foods])

    return (
        <div>
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <div className="single-item-img">
                            <img className="w-100" src={singleFood?.img} alt="" />
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="single-item-details text-white">
                            <h2>{singleFood?.name}</h2>
                            <p>{singleFood?.description}</p>
                            <small>{singleFood?.rating}</small>
                            <h3>${singleFood?.price}</h3>
                            <button>Add to Cart</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default FoodDetails;