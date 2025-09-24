
import { Route, Routes } from 'react-router-dom'
import Layout from '../layouts/Layout'
import Home from '../pages/Home'
import Cards from '../pages/Cards'
import AuthLayout from '../layouts/AuthLayout'
import Login from '../pages/Login'
import Product from '../layouts/Product'
import Profilelay from '../layouts/Profilelay'
import Profile from '../pages/Profile'
export default function BaseRoutes() {
  
    return(
         <Routes>
    <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        
      <Route path='recipes' element={<Product/>}>
      <Route index element={<Cards />}/>
      </Route>
      <Route path='favorites' element={<Cards a:true/>}/>
        {/* auth Routes*/}
        <Route path='profile' element={<Profilelay/>}>
            <Route index element={<Profile/>}/>
        </Route>
        <Route path='auth' element={<AuthLayout/>}>
            <Route index element={<Login/>}/>
        </Route>

    </Route>
  </Routes>
    )
    
};
