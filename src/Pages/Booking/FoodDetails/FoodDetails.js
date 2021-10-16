import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import './FoodDetails.css';

const FoodDetails = () => {
    const {foodId} = useParams();
    const [foods,setFoods] = useState([]);
    const [singleFood ,setSingleFood] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [cartItemPrice ,setCartItemPrice] =useState(singleFood?.price);

    useEffect(()=>{
        fetch('/foodsDetails.json')
        .then(res => res.json())
        .then(data => setFoods(data))
    },[])

    useEffect(()=>{
        const getFood = foods.find(food => food.id === foodId);
        setSingleFood(getFood);
    },[foods])


    const handleQunatityIncrement = () =>{
            const newQuantity = quantity + 1;
            setQuantity(newQuantity);
    }

    const handleQunatityDecrement = () =>{
       if(quantity > 1){
        const newQuantity = quantity - 1;
        setQuantity(newQuantity);
       }
    }

    return (
        <div>
            <Container> 
                <Row className="align-items-center my-5">
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
                            <div className="handleQuantity">
                                <button onClick={handleQunatityIncrement}><FontAwesomeIcon icon={faPlus} /></button>
                                    <span>{quantity}</span>
                                <button onClick={handleQunatityDecrement}><FontAwesomeIcon icon={faMinus} /> </button>
                            </div>
                            <button className="addcart-btn">Add to Cart</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default FoodDetails;