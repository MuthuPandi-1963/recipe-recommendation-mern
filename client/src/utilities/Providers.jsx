import { MartProvider } from "../Context/MartContext"
import { ProductProvider } from "../Context/ProductContext"
import Mart from "./Mart"
import Product from "../layouts/Product"
import BaseRoutes from "../Routes/BaseRoutes"
export default function Providers() {
    return (<>
        <ProductProvider>
            <BaseRoutes />
        </ProductProvider>
        <MartProvider>
            <BaseRoutes />
        </MartProvider>
    </>
    )

};
