import React from 'react'
// help function that implisitly drill props to the children
export const drillProps = (children, props) => {
  return React.Children.map(children, (child)=>{
    return React.cloneElement(child, props)
  })
}