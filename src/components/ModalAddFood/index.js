import React, { useRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';

const ModalAddFood = ({ isOpen, setIsOpen, handleAddFood }) => {
  const formRef = useRef(null);

  function handleSubmit(data) {
    // TODO ADD A NEW FOOD AND CLOSE THE MODAL - done
    const newFood = data;
    handleAddFood(newFood);
    setIsOpen(!isOpen);
  }

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Novo Prato</h1>
        <Input name="image" placeholder="Cole o link da imagem aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" required />
        <Input name="price" placeholder="Ex: 19.90" required />
        <Input name="description" placeholder="Descrição" required />

        <Input name="quantity" placeholder="Quantidade" required />
        <Input name="timeToCook" placeholder="Tempo de preparo" required />
        <Input name="available" placeholder="Para disponibilizar digite 'sim'" />

        <button type="submit">
          <p className="text">Adicionar Prato</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};

export default ModalAddFood;
