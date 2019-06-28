import React from 'react';
import './App.css';
import RecipeList from './Component/RecipeList';
import { Provider } from 'react-redux';

import store from './store/store';


function App() {
  return (
    <Provider store={ store }>
      <React.Fragment>
        <div className="container-fluid text-center">
          <div className="row">
            <h1 className="col-12">Recipe app</h1>
            <RecipeList/>
          </div>
        </div>
      </React.Fragment>
    </Provider>
  );
}

export default App;
