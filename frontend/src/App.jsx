import {BrowserRouter , Routes , Route} from 'react-router-dom'
import './App.css'
import { Home } from './components/Home'
import { AddItem } from './components/AddItem'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/add' element={<AddItem/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
