import React, { memo } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import MealItem from "./meal-item/MealItem";
import { getMeals } from "../../store/meals/mealsSlice";

const Meals = () => {
  const { meals, isLoading, error } = useSelector((state) => state.meals);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMeals());
  }, [dispatch]);

  return (
    <Card>
      {isLoading && !error && <p>Loading</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <StyledUl>
        {meals.map((item) => (
          <MealItem key={item._id} item={item} />
        ))}
      </StyledUl>
    </Card>
  );
};

export default memo(Meals);

const Card = styled.div`
  background: #fff;
  border-radius: 1rem;
  width: 64.9375rem;
  margin: 160px auto;
`;

const StyledUl = styled.ul`
  list-style: none;
  padding: 20px 40px;
`;
