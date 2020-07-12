import React, {useState} from 'react';

const ButtonOne = (props)=>{
  const [ {cost, level}, setB1] = useState ({cost: 10,level:1})

  const upgrade = ()=>{
    return(
      props.setCash( currentCount =>({
        cash: currentCount.cash - cost,
        increment: currentCount.increment++
      }))
  )}

  const upButton = ()=>{
    return(
      setB1(currentUp =>({
        cost: Math.ceil(currentUp.cost * 1.5),
        level: currentUp.level+1
      }))
    )
  }

  console.log(props)

  if(props.cash<cost){
    return(
      <div>
      <p>level:{level}</p> <p>cost:{cost}</p>
      <button onClick={()=>upButton()}>up cost</button>
      </div>
    )
  }
  return(
    <div>
      <p>level:{level}</p> <p>cost:{cost}</p>
      <button onClick = {()=>upgrade()}>
        increase increment
      </button>
      <button onClick={()=>upButton()}>up cost</button>
    </div>
  )
}

export default ButtonOne
