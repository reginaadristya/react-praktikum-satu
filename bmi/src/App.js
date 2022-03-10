import React, { useState } from 'react'

import Alert from './components/Alert'

const App = () => {
  const [berat, setBerat] = useState(0)
  const [tinggi, setTinggi] = useState(0)
  const [bmi, setBmi] = useState(0)

  const calculate = (e) => {
    e.preventDefault()
    const formValid = tinggi > 0 && berat > 0
    if (!formValid) {
      return
    }
    const bmi = berat / (tinggi * tinggi)
    setBmi(bmi)
  }

  return (
    <div className='container pt-3'>
      <div className='card p-3'>
        <div className='d-flex justify-content-center align-items-center'>
          <h2 className='text-center fw-bold'>Kalkulator BMI</h2>
        </div>
        <form onSubmit={calculate}>
          <div className='form-group mb-3'>
            <label>Berat</label>
            <input type='number' className='form-control' id='berat' placeholder='Silakan masukkan berat anda' onChange={(e) => setBerat(e.target.value)} value={berat} />
          </div>
          <div className='form-group my-3'>
            <label>Tinggi</label>
            <input type='number' className='form-control' id='tinggi' placeholder='Silakan masukkan tinggi anda' onChange={(e) => setTinggi(e.target.value)} value={tinggi} />
          </div>
          <hr />
          <div className='d-flex align-items-end justify-content-end'>
            <button type='submit' className='btn btn-danger'>Hitung BMI</button>
          </div>
        </form>
      </div>
      <div className='card p-3 my-5'>
        <h2 className='text-center fw-bold'>Hasil</h2>
        {
          bmi < 18.5 ? <Alert heading='Kekurangan Berat Badan (Kurus)' type='danger' icons='bi-exclamation-triangle-fill' />
            : bmi < 25 ? <Alert heading='Berat Badan Normal' type='success' icons='bi-check-circle-fill' />
              : bmi < 30 ? <Alert heading='Kelebihan Berat Badan (Gemuk)' type='warning' icons='bi-exclamation-triangle-fill' />
                : <Alert heading='Obesitas' type='danger' icons='bi-exclamation-triangle-fill' />
        }
      </div>
    </div>
  )
}

export default App