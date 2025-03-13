import { Outlet } from 'react-router'
import './App.css'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <main className='max-w-7xl mx-auto px-4'>
        <Outlet/>
      </main>
    </>
  )
}

export default App
