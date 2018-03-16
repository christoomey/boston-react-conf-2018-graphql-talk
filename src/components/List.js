import React from 'react';

const List = ({items, itemKey, component: Component}) => (
  <ul>
    {items.map(item => {
      const itemKeyProp = {[itemKey]: item};
      return <Component key={item.id} {...itemKeyProp} />;
    })}
  </ul>
);

export default List;
