import React from 'react'
import {addPropsToChildren} from './addPropsToChildren'

const SomeComponent = ({children, ...props})=>{
  // drill props to nested level
  const childrenWithProps = addPropsToChildren(children, props)
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