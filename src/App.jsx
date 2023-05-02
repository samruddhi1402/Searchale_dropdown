import { useState } from 'react'
import SearchableDropdown from './SearchableDropdown'
import './App.css'

function App() {
  const options = ['Option 1', 'Option 2', 'Option 3'];

 


  return (
    <>

<div className="App">
        <SearchableDropdown options={options} />

  </div>
    </>
  )
}

export default App
