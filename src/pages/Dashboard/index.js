import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';

import api from '../../services/api';

import Food from '../../components/Food';
import ModalAddFood from '../../components/ModalAddFood';
import ModalEditFood from '../../components/ModalEditFood';

import { FoodsContainer } from './styles';

const Dashboard = () => {
  const [foods, setFoods] = useState([]);
  const [foodsListIsUpdated, setFoodsListIsUpdated] = useState(true);
  const [editingFood, setEditingFood] = useState();
  const [modalOpen, setModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);

  // TO LOAD ALL THE FOOD PLATES IN THE API - done
  useEffect(() => {
    let mounted = true;
    async function LoadFoods() {
      try {
        const response = await api.get("/foods");
        if(mounted){
        setFoods(response.data);
        }
      } catch(err) {
        console.log(err);
      };
    };
    LoadFoods();
    return () => mounted = false;
  },[foodsListIsUpdated]);

  async function handleAddFood(food) {
    // TODO ADD A NEW FOOD PLATE TO THE API - done
    try {
      const response = await api.post("/foods", food);
      setFoods([...foods, response.data]);
    } catch(err) {
      console.log(err);
    }
  }

  async function handleUpdateFood(food) {
    // TODO UPDATE A FOOD PLATE ON THE API - done
    try {
      await api.put(`/foods/${editingFood.id}`, food);
      setFoodsListIsUpdated(!foodsListIsUpdated);
    } catch(err) {
      console.log(err);
    }
  }

  async function handleDeleteFood(id) {
    // TODO DELETE A FOOD PLATE FROM THE API - done
    try {
      await api.delete(`/foods/${id}`)
      setFoods(foods.filter(food => food.id !== id));
    } catch(err) {
      console.log(err);
    }
  }

  function toggleModal() {
    setModalOpen(!modalOpen);
  }

  function toggleEditModal() {
    setEditModalOpen(!editModalOpen);
  }

  function handleEditFood(food) {
    // TODO SET THE CURRENT EDITING FOOD ID IN THE STATE - done
    setEditingFood(food);
  }

  return (
    <>
      <Header openModal={toggleModal} />
      <ModalAddFood
        isOpen={modalOpen}
        setIsOpen={toggleModal}
        handleAddFood={handleAddFood}
      />
      <ModalEditFood
        isOpen={editModalOpen}
        setIsOpen={toggleEditModal}
        editingFood={editingFood}
        handleUpdateFood={handleUpdateFood}
      />

      <FoodsContainer data-testid="foods-list">
        {foods &&
          foods.map(food => (
            <Food
              key={food.id}
              food={food}
              handleDelete={handleDeleteFood}
              handleEditFood={handleEditFood}
              toggleEditModal={toggleEditModal}
            />
          ))}
      </FoodsContainer>
    </>
  );
};

export default Dashboard;
