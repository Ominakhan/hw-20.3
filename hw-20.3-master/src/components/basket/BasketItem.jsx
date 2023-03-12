import React from "react";
import styled from "styled-components";
import Button from "../UI/Button";
import { ReactComponent as PlusIcon } from "../../assets/icons/plus-icon.svg";
import { ReactComponent as MinusIcon } from "../../assets/icons/minus-icon.svg";

const BasketItem = ({
  title,
  price,
  amount,
  decrementAmount,
  incrementAmount,
}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Content>
        <PriceAndAmountContainer>
          <Price>${price}</Price>
          <Amount>x{amount}</Amount>
        </PriceAndAmountContainer>
        <CounterContainer>
          <Button
            borderStyle="squared"
            variant="outlined"
            onClick={decrementAmount}
          >
            <MinusIcon />
          </Button>
          <Button
            borderStyle="squared"
            variant="outlined"
            onClick={incrementAmount}
          >
            <PlusIcon />
          </Button>
        </CounterContainer>
      </Content>
    </Container>
  );
};

export default BasketItem;

const Container = styled.div`
  padding: 24px 0;
  width: 100%;
  border-bottom: 1px solid #d6d6d6;
  :last-child {
    border: none;
  }
`;

const Title = styled.p`
  margin: 0;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
`;

const Price = styled.p`
  margin: 0;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  color: #ad5502;
`;

const Amount = styled.span`
  border: 1px solid #d6d6d6;
  border-radius: 6px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  padding: 6px 14px;
  display: block;
`;

const PriceAndAmountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 153px;
`;

const CounterContainer = styled.div`
  display: flex;
  gap: 14px;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;