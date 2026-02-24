// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'

function App() {
  // const [count, setCount] = useState(0)
  const count = useSelector((state) => state.count)
  const dispatch = useDispatch()
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button
          onClick={() => dispatch({ type: "INCREMENT" })}
          role='button'
          cy-data="increment"
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
// npm install -D jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom babel-jest @babel/preset-env @babel/preset-react identity-obj-proxy

//! RIngkasan Assiterturn
//! Jest
//! Baca config
//! load jsdom
//! load setupTests.js
//! menggunakan Babel untuk transform jsx
//! jalankan test