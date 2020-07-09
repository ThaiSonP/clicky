import React, {useState} from 'react';

const App = props =>{
  const [cash, setCash]=useState(0);

  const plusOne = ()=>{
    setCash(cash+1)
  }

return(
  <div>
    <p>current balance: {cash}</p>
    <button onClick ={()=>plusOne()}>button</button>
  </div>
  );
}
export default App
