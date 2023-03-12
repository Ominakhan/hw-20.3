import React from "react";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  deleteBasketItem,
  updateBasketItem,
} from "../../store/basket/basketSlice";
import Modal from "../UI/Modal";
import BasketItem from "./BasketItem";
import TotalAmount from "./TotalAmount";

const Basket = ({ onClose }) => {
  const items = useSelector((state) => state.basket.items);

  const dispatch = useDispatch();

  const getTotalPrice = useCallback(() => {
    return items.reduce((sum, { amount, price }) => sum + amount * price, 0);
  }, [items]);

  const decrementAmount = (id, amount) => {
    if (amount > 1) {
      dispatch(updateBasketItem({ amount: amount - 1, id: id }));
    } else {
      dispatch(deleteBasketItem(id));
    }
  };

  const incrementAmount = (id, amount) => {
    dispatch(updateBasketItem({ amount: amount + 1, id: id }));
  };

  return (
    <Modal onClose={onClose}>
      <Content>
        {items.length ? (
          <FixedHeightContainer>
            {items.map((item) => (
              <BasketItem
                key={item._id}
                incrementAmount={() => incrementAmount(item._id, item.amount)}
                decrementAmount={() => decrementAmount(item._id, item.amount)}
                title={item.title}
                price={item.price}
                amount={item.amount}
              />
            ))}
          </FixedHeightContainer>
        ) : null}
        <TotalAmount
          price={getTotalPrice()}
          onCLose={onClose}
          onOrder={() => {}}
        />
      </Content>
    </Modal>
  );
};

export default Basket;

const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 1rem 1.5rem 1rem;
`;

const FixedHeightContainer = styled.div`
  max-height: 228px;
  overflow-y: scroll;
`;