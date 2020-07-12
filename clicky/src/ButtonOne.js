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

  const upgradeButton = ()=>{
    return(
      upgrade().then(
        setB1(currentUp =>({
          cost: Math.ceil(currentUp.cost * 1.5),
          level: currentUp.level+1
        }))
      )
    )
  }

  if(props.cash<cost){
    return(
      <div>
      <p>level:{level} cost:{cost}</p>
      </div>
    )
  }
  return(
    <div>
      <p>level:{level} cost:{cost}</p>
      <button onClick = {()=>upgradeButton()}>
        increase increment
      </button>
    </div>
  )
}

export default ButtonOne
