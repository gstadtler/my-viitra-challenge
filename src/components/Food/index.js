import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { FiEdit3, FiTrash } from 'react-icons/fi';

import { Container } from './styles';

const Food = ({ food, handleDelete, handleEditFood, toggleEditModal }) => {
  const [isAvailable, setIsAvailable] = useState(food.available);

  async function toggleAvailable() {
    // TODO UPDATE STATUS (available) - done
    setIsAvailable(!isAvailable);
  }

  function setEditingFood(food) {
    // TODO - SET THE ID OF THE CURRENT ITEM TO THE EDITING FOOD AND OPEN MODAL - done
    const currentFood = food;
    handleEditFood(currentFood);
    toggleEditModal();
  }

  return (
    <Container available={isAvailable}>
      <Link to={`/food-details/${food.id}`}>
        <header>
          <img src={food.image} alt={food.name} />
        </header>
        <section className="body">
          <h2>{food.name}</h2>
          <p>{food.description}</p>
          <p className="price">
            R$ <b>{food.price}</b>
          </p>
        </section>
      </Link>
      <section className="footer">
        <div className="icon-container">
          <button
            type="button"
            className="icon"
            onClick={() => setEditingFood(food)}
          >
            <FiEdit3 size={20} />
          </button>

          <button
            type="button"
            className="icon"
            onClick={() => handleDelete(food.id)}
          >
            <FiTrash size={20} />
          </button>
        </div>

        <div className="availability-container">
          <p>{isAvailable ? 'Disponível' : 'Indisponível'}</p>

          <label htmlFor={`available-switch-${food.id}`} className="switch">
            <input
              id={`available-switch-${food.id}`}
              type="checkbox"
              checked={isAvailable}
              onChange={toggleAvailable}
            />
            <span className="slider" />
          </label>
        </div>
      </section>
    </Container>
  );
};

export default Food;
