import React from 'react';

const List = ({items, component: Component}) => (
  <ul>{items.map(item => <Component key={item.id} org={item} />)}</ul>
);

export default List;
