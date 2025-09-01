import { ProductProvider } from "../Context/ProductContext"
import BaseRoutes from "../Routes/BaseRoutes"
export default function Providers() {
    return (<>
        <ProductProvider>
            <BaseRoutes />
        </ProductProvider>
    </>
    )

};
