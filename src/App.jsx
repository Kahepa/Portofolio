import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav className="bg-gray-900 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <a href="#" className="text-2xl font-bold">Logo</a>
          </div>
          <div>
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:text-gray-300">Home</a></li>
              <li><a href="#" className="hover:text-gray-300">About</a></li>
              <li><a href="#" className="hover:text-gray-300">Portfolio</a></li>
              <li><a href="#" className="hover:text-gray-300">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default App
