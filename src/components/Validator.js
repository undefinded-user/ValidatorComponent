import React from 'react'
import {useState, useEffect} from 'react'

import {drillProps} from '../functions/drillProps.js'


const Validator = ({children, ...props}) => {
  // mark for calling method from parent
  const [callFromParent, setCallFromParent] = useState(false)
  // call child method if parent method was executed
  const useEffect(()=>{
    props.callFromParent&&validate()
  })


  const validate = () => {
     // if validate method was called at parent component(prevents a cascade reaction)
     if(!props.callFromParent) {
     
      // initiate execution validate method at child component
      setCallFromParent(true)
      return
    }   
    props.refreshParentCall&&props.refreshParentCall()
  }

  // refresh parent state with little delay 
  // to prevent updating component during render child component
  // allows to execute validate method at child as at parent
  const refreshParentCall = () => {
    setTimeout(()=>{
      setCallFromParent(false)
    }, 10)
  }


  // / implicitly drill props to children components
  const childrenWithProps = drillProps(children, {callFromParent, refreshParentCall})

  return(
    <div>
       {childrenWithProps}
    </div>
  )
}

export default Validator