import React from 'react';

const Card = ({children, title}) => (
  <section>
    <h3>{title}</h3>
    {children}
  </section>
);

export default Card;
