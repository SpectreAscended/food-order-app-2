import React from 'react';
import DUMMY_MEALS from '../../store/dummydata';
import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem';

const AvailableMeals = () => {
  console.log(DUMMY_MEALS);

  const mealsList = DUMMY_MEALS.map(item => (
    <MealItem
      key={item.id}
      id={item.id}
      name={item.name}
      description={item.description}
      price={item.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
