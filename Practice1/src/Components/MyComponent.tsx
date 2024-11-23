import React from 'react';

// Props interface (if the component accepts props)
interface MyComponentProps {
  title: string;
}

// Functional Component
const MyComponent: React.FC<MyComponentProps> = ({ title }) => {
  return <h1>{title}</h1>;
};

export default MyComponent;
