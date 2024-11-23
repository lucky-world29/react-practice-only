import React from 'react';
import MyComponent from './Components/MyComponent'; // Ensure the casing matches
import Home from './Components/Home';

const App: React.FC = () => {
  return (
    <div>
      <h1>Welcome to My App</h1>
      <MyComponent title="Hello from MyComponent!" />
      <Home/>
    </div>
  );
};

export default App;
