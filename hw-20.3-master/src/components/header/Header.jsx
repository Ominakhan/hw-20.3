import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getBasket } from "../../store/basket/basketSlice";
import BusketButton from "./BusketButton";

const Header = ({ onShowBasket }) => {
  const items = useSelector((state) => state.basket.items);
  const [animationClass, setAnimationClass] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBasket());
  }, [dispatch]);

  const calculateTotalAmount = () => {
    const sum = items.reduce((s, item) => {
      return s + item.amount;
    }, 0); 

    return sum;
  };

  useEffect(() => {
    setAnimationClass("bump");

    const id = setTimeout(() => {
      setAnimationClass("");
    }, 300);

    return () => {
      clearTimeout(id);
    };
  }, [items]);

  return (
    <Container>
      <Logo>ReactMeals</Logo>
      <BusketButton
        className={animationClass}
        onClick={onShowBasket}
        count={calculateTotalAmount()}
      />
    </Container>
  );
};

export default Header;

const Container = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 6.3125rem;
  background: #8a2b06;
  padding: 0 7.5rem;
  align-items: center;
  z-index: 1;
`;

const Logo = styled.p`
  font-weight: 600;
  font-size: 2.375rem;
  line-height: 3.5625rem;
  color: #ffffff;
  margin: 0;
`;