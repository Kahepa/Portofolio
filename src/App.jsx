import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav class="bg-gray-900 py-6">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <a href="#" class="text-white text-2xl font-semibold">Your Portfolio</a>
              <div class="ml-4 flex items-center">
                <a href="#" class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
                <a href="#" class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Portfolio</a>
                <a href="#" class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
                <a href="#" class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
              </div>
            </div>
            <div class="ml-4 flex items-center md:ml-6">
              <button class="bg-white rounded-full p-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                <span class="sr-only">View notifications</span>
                /* Heroicon name: bell */
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18V12a6 6 0 0112 0v6m-2.094 0c.36-.607.594-1.288.667-2H8.427c.073.712.307 1.393.666 2H3v-2a3 3 0 016 0v2H6z" />
                </svg>
              </button>

              <div class="ml-3 relative">
                <div>
                  <button class="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu" aria-haspopup="true">
                    <span class="sr-only">Open user menu</span>
                    <img class="h-8 w-8 rounded-full" src="https://randomuser.me/api/portraits/men/1.jpg" alt=""></img>
                  </button>
                </div>
                <div class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                  <div class="py-1" role="none">
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Your Profile</a>
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</a>
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sign out</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default App
