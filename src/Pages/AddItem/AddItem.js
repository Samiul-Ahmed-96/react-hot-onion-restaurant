import axios from 'axios';
import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './AddItem.css';

const AddItem = () => {
        const { register, handleSubmit,reset } = useForm();
        const onSubmit = data => {
            axios.post('http://localhost:5000/items' ,data)
            .then(result => {
                if(result.data.insertedId){
                    alert('Successfully added');
                    reset();
                }
            })
        };

    return (
      <Container className="text-white">
            <h2>Add a item</h2>
            <form className="form-item" onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")} placeholder="Name"/>
                <input {...register("rating")} placeholder="Rating"/>
                <textarea {...register("description")} placeholder="Description"/>
                <input {...register("price")} type="number" placeholder="price"/>
                <input {...register("img")} placeholder="Img URL"/>
                <input type="submit" />
            </form>
      </Container>
    );
};

export default AddItem;