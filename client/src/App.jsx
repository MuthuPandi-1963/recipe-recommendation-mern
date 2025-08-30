import {ProductProvider} from "./Context/ProductContext"
import BaseRoutes from "./Routes/BaseRoutes"  
export default function App() {
  return (
 <ProductProvider>
    <BaseRoutes/>
 </ProductProvider>
  )
}
