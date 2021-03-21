import React from 'react'
import Validator from './Validator.js'
import SomeComponent from './SomeComponent'
function App() {
  return (
    
    <Validator level='First'>
      <Validator level='Second'>
        <SomeComponent>
          <SomeComponent>
            <Validator level='Third'></Validator>
          </SomeComponent>
        </SomeComponent>
      </Validator>
      <Validator level='Second'/>
    </Validator>
  )
}

export default App;
