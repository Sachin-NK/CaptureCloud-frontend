import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/homePage';
import LoginPage from './pages/loginPage';

function App() {

  return (
      <BrowserRouter> 
        <div className='w-full h-[100vh]'>
        <Routes path="/">
          <Route path="/*" element={<HomePage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
        </Routes>
        </div>
      </BrowserRouter>
  )
}

export default App
