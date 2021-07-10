import './App.css';
import React from 'react';
import {Route} from 'react-router-dom';
import HomePage from './page/homepage/homepage.component';

const HatsPage = () => {
  return(
  <div>
    <h1>
      HATS PAGE
    </h1>
  </div>
  )
}
function App(){
  return(
   <div>
      <Route exact path="/"  component={HomePage} />
      <Route path="/hats"  component={HatsPage} />
   </div>
  )
}

export default App;
