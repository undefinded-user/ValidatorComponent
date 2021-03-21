import React from 'react'
import {drillProps} from '../functions/drillProps'

const SomeComponent = ({children, ...props})=>{
  // drill props to nested level
  const childrenWithProps = drillProps(children, props)
  return (
    <div>
      <p>SomeComponent content</p> 
      <div className='nested'>
        {childrenWithProps}
      </div>      
    </div>
  )
}

export default SomeComponent