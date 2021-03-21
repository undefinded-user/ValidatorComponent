import { findAllByDisplayValue } from '@testing-library/dom'
import React from 'react'
import {useState, useEffect} from 'react'

import {drillProps} from '../functions/drillProps.js'


const Validator = ({children, level, ...props}) => {
  // mark for calling method from parent
  const [callFromParent, setCallFromParent] = useState(false)
  // UI marks
  const [info, setInfo] = useState('')
  const [isParent, setIsParent] = useState(findAllByDisplayValue)
  // call child method if parent method was executed
  const useEffect(()=>{
    props.callFromParent&&validate()
  })


  const validate = () => {
     // if validate method was called at parent component(prevents a cascade reaction)
     if(!props.callFromParent) {
      // UI logic
      setIsParent(true)
      setInfo(`Validate was executed at ${level} level parent element`)
      // clear info after 2 seconds
      setTimeout(()=>{
        setIsParent(false)
        setInfo('')
      }, 2000)

      // initiate execution validate method at child component
      setCallFromParent(true)
      return
    }   
    // when vaidate method was called by execcution at parent method
    props.refreshParentCall&&props.refreshParentCall()
    // UI logic
    setInfo(`Validate was called from parent method at ${level} level child`)
    // clear info after 2 seconds
    setTimeout(()=>{
      setInfo('')
    }, 2000)
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
      <p>{level} Level Validate Component</p>
      {info&&<p className={isParent? 'dangerous-info' : 'info'}>{info}</p>}
      <button className='btn' onClick={validate}>Validate</button>
      <div className='nested'>
        {childrenWithProps}
      </div> 
    </div>
  )
}

export default Validator