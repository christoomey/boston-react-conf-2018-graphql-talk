import React from 'react';
import Card from './Card';
import List from './List';

const CardList = ({title, items, itemKey, component}) => (
  <Card title={title}>
    <List items={items} itemKey={itemKey} component={component} />
  </Card>
);

export default CardList;
