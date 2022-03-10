import React from 'react'
import Biner from './convert/Biner'
import Decimal from './convert/Decimal'
import Heksa from './convert/Heksa'
import Octal from './convert/Octal'

function App() {
  return (
    <div>
      <div className='pt-3 pb-3'>
        <Biner />
      </div>
      <div className='pt-3 pb-3'>
        <Decimal />
      </div>
      <div className='pt-3 pb-3'>
        <Octal />
      </div>
      <div className='pt-3 pb-3'>
        <Heksa />
      </div>
    </div>
  )
}

export default App