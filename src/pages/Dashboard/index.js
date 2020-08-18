import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';

import api from '../../services/api';

import Food from '../../components/Food';
import ModalAddFood from '../../components/ModalAddFood';
import ModalEditFood from '../../components/ModalEditFood';

import { FoodsContainer } from './styles';

const Dashboard = () => {
  const [foods, setFoods] = useState([]);
  const [editingFood, setEditingFood] = useState();
  const [modalOpen, setModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);

  // gstadtler
  useEffect(() => {
    async function handleListFood() {
      try {
        const response = await api.get("/foods");
        setFoods(response.data);
      } catch(err) {
        console.log(err);
      };
    };
    handleListFood();
  },[]);

  //gstadtler
  async function handleAddFood(food) {
    // TODO ADD A NEW FOOD PLATE TO THE API
    try {
      const response = await api.post("/foods", food);
      //console.log(response);
    } catch(err) {
      console.log(err);
    }
  }

  async function handleUpdateFood(food) {
    // TODO UPDATE A FOOD PLATE ON THE API
  }

  async function handleDeleteFood(id) {
    // TODO DELETE A FOOD PLATE FROM THE API
    try {
      const response = await api.delete(`/foods${id}`)
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
    // TODO SET THE CURRENT EDITING FOOD ID IN THE STATE
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
            />
          ))}
      </FoodsContainer>
    </>
  );
};

export default Dashboard;
