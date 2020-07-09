import React, {useState} from 'react';

const App = props =>{
  const [cash, setCash]=useState(0);

return(
  <div>
    <p>current balance: {cash}</p>
    <button onClick ={()=>setCash(cash+1)}>button</button>
  </div>
  );
}
export default App
