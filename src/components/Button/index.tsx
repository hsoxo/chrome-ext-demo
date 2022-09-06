import React from 'react';

const Button: React.FC = ({ children }) => {
  return <button className="text-md font-medium text-base-color/50">{children}</button>;
};

export default Button;
