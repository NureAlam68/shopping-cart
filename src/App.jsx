import { Outlet } from 'react-router'
import './App.css'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className='max-w-7xl mx-auto px-4'>
      <Navbar></Navbar>
      <main>
        <Outlet/>
      </main>
    </div>
  )
}

export default App
