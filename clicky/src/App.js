import React, {useState} from 'react';
import ButtonOne from './ButtonOne.js'

const App = props =>{
  const [ {cash, increment}, setCash]=useState({cash:0,increment:1});

return(
  <div>
    <p>current balance: {cash}</p>
    <button onClick ={()=>
      setCash( currentCount => ({
      ...currentCount,
      cash: currentCount.cash + currentCount.increment
    }))}>Plus One</button>
    <ButtonOne setCash = {setCash} cash={cash}/>
  </div>
  );
}
export default App
