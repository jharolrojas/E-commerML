import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import {Home, ProductDetail, Purchases,Login} from './page'
import {NavBar, Protected}  from './components'
import { useSelector } from 'react-redux'
import Loeding from './components/Loeding'



function App() {
  const loeding = useSelector(state => state.isLoading)
  return (
    <HashRouter>
      <div className="App">
        <NavBar/>
        {loeding && <Loeding/>}
        <Routes>
          <Route element={<Protected/>}>
          <Route path='/Purchases' element={<Purchases/>}  />
          </Route>
          <Route path='/' element={<Home/>}  />
          <Route path='/Login' element={<Login/>}  />
          <Route path='/Product/:id' element={<ProductDetail/>}  />
        </Routes>
        
      </div>
      </HashRouter>
  )
}

export default App
