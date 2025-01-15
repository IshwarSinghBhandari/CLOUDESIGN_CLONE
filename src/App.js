import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RouterConfig from './routes/Router'; // Import Router.js

const App = () => {
  return (
    <Router>
      <div className="App">
        <RouterConfig /> 
      </div>
    </Router>
  );
};

export default App;
