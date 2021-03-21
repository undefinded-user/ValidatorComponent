import React from 'react'
// help function that implisitly drill props to the children
export const addPropsToChildren = (children, props) => {
  return React.Children.map(children, (child)=>{
    return React.cloneElement(child, props)
  })
}