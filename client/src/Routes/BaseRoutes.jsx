
import { Route, Routes } from 'react-router-dom'
import Layout from '../layouts/Layout'
import Home from '../pages/Home'
import Cards from '../pages/Cards'
import AuthLayout from '../layouts/AuthLayout'
import Login from '../pages/Login'
import Product from '../layouts/Product'
import Mart from '../utilities/Mart'
export default function BaseRoutes() {
    return(
         <Routes>
    <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        
      <Route path='recipes' element={<Product/>}>
      <Route index element={<Cards/>}/>
      </Route>
        {/* auth Routes*/}
        <Route path='auth' element={<AuthLayout/>}>
            <Route index element={<Login/>}/>
        </Route>

    </Route>
  </Routes>
    )
    
};
