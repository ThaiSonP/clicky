import React from 'react';

class ClassApp extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      cash:0
    }
  }

  oneUp=()=>{
    this.setState({
      cash: this.state.cash += 1
    })
  }

  render(){
    const {cash} = this.state
  return (
    <div className="App">
      <p>Current balance: {cash}</p>
      <button onClick = {this.oneUp}>this is button</button>
    </div>
  );
  }
}

export default ClassApp;
