import React, { useRef } from 'react';

import { FiCheckSquare } from 'react-icons/fi';
import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';

const ModalEditFood = ({
  isOpen,
  setIsOpen,
  editingFood,
  handleUpdateFood,
}) => {
  const formRef = useRef(null);

  function handleSubmit(data) {
    // EDIT A FOOD PLATE AND CLOSE THE MODAL - done
    const editedFoodPlate = data;
    handleUpdateFood(editedFoodPlate);
    setIsOpen(!isOpen);
  }
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingFood}>
        <h1>Editar Prato</h1>
        <Input name="image" placeholder="Cole o link da imagem aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />
        <Input name="description" placeholder="Descrição" />

        <Input name="quantity" placeholder="Quantidade" />
        <Input name="timeToCook" placeholder="Tempo de preparo" />
        <Input name="available" placeholder="Para disponibilizar digite 'sim'" />

        <button type="submit">
          <div className="text">Editar Prato</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};

export default ModalEditFood;
