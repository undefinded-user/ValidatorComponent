import React from 'react'
import {useState, useEffect} from 'react'

import {drillProps} from '../functions/drillProps.js'


const Validator = ({children, ...props}) => {
  // mark for calling method from parent
  const [callFromParent, setCallFromParent] = useState(false)
  // implicitly drill props to children components
  const childrenWithProps = drillProps(children, {callFromParent})
  // call child method if parent method was executed
  const useEffect(()=>{
    props.callFromParent&&validate()
  })

  const validate = () => {

  }

  return(
    <div>
       {childrenWithProps}
    </div>
  )
}

export default Validator