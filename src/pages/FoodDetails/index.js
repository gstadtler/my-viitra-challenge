import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import { FiHome } from 'react-icons/fi';
import { Button, Container } from './styles';


const FoodDetails = (props) => {
  const [food, setFood] = useState([]);

  const foodId = props.match.params.foodId;

  useEffect(() => {
    async function LoadFood() {
      try{
        const response = await api.get(`/foods/${foodId}`)
        setFood(response.data);
      } catch(err) {
        console.log(err);
      }
    };
    LoadFood();
  },[]);

  return (
    <>
      <Button>
        <div className="icon">
          <FiHome size={20} />
        </div>
        <div className="text">Voltar</div>
      </Button>
      <Container>
        <header>
          <img src={food.image} alt={food.name} />
        </header>
        <section className="body">
          <h2>{food.name}</h2>
          <p>{food.description}</p>
          <p className="price">
            R$ <b>{food.price}</b>
          </p>
          <p>Quantidade: {food.quantity}</p>
          <p>Tempo de preparo: {food.timeToCook}</p>
        </section>
      </Container>
    </>
  );
};

export default FoodDetails;
