import { useContext } from "react"
import { ProductContext } from "../Context/ProductContext"

export default function Search() {
  const {searchResults}= useContext(ProductContext)

    return(
        <div className="">

         {searchResults.length > 0 && (
             <div className="bg-white shadow-md border-t">
                  <ul className="max-w-7xl mx-auto px-4 py-2">
                    {searchResults.map((recipe) => (
                        <li key={recipe.id} className="py-1 text-gray-700">
                        {recipe.name}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              </div>
    )
};
