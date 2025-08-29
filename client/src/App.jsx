import Login from './pages/Login'
import AuthLayout from './layouts/AuthLayout'
import { Route, Routes } from 'react-router-dom'
import Layout from './layouts/Layout'
import Home from './pages/Home'
import Product from './layouts/Product'
import Cards from './pages/Cards'
export default function App() {
  return (
  <Routes>
    <Route path='/' element={<Layout/>}>

        <Route index element={<Home/>}/>

      <Route path='recipes' element={<Product/>}>
      <Route index element={<Cards/>
      }/>
      </Route>
        {/* auth Routes*/}
        <Route path='auth' element={<AuthLayout/>}>
            <Route index element={<Login/>}/>
        </Route>

    </Route>
  </Routes>
  )
}
