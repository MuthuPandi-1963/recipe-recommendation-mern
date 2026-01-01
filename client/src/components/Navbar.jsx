import { Heart, Menu, Search, User, UtensilsCrossed, X } from 'lucide-react';
import React, { useContext, useState } from 'react';
import { ProductContext } from '../Context/ProductContext';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { handleSearch } = useContext(ProductContext);

  const handleSubmit = async () => {
    
  }


  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <UtensilsCrossed className="h-6 w-6 text-green-600" />
            <span className="font-bold text-lg text-gray-800">RecipeRec</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-green-600">Home</Link>
            <Link to="/recipes" className="text-gray-700 hover:text-green-600">Recipes</Link>
            <Link to="/recipes/favorites" className="flex items-center text-gray-700 hover:text-green-600" >
              <Heart className="h-4 w-4 mr-1" /> Favorites
            </Link>
            <Link to="/profile" className="flex items-center text-gray-700 hover:text-green-600">
              <User className="h-4 w-4 mr-1" /> Profile
            </Link>
            <div className="flex items-center bg-gray-700 rounded">
              <Input
                className="border-none bg-gray-700 text-white rounded-r-none"
                placeholder="Search recipes..."
                onChange={handleSearch}
              />
              <Search className="text-white p-2" size={23} />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-green-600">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 py-3 space-y-2">
            <Link to="/" className="block text-gray-700 hover:text-green-600">Home</Link>
            <Link to="/recipes" className="block text-gray-700 hover:text-green-600">Recipes</Link>
            <Link to="/favorites" className="flex items-center text-gray-700 hover:text-green-600">
              <Heart className="h-4 w-4 mr-1" /> Favorites
            </Link>
            <Link to="/profile" className="flex items-center text-gray-700 hover:text-green-600">
              <User className="h-4 w-4 mr-1" /> Profile
            </Link>
            <div className="flex items-center bg-gray-700 rounded">
              <Input
                className="border-none bg-gray-700 text-white rounded-r-none"
                placeholder="Search recipes..."
                onChange={handleSearch}
              />
              <Search className="text-white p-2" size={23} onClick={() => { handleSubmit() }} />
            </div>
          </div>
        </div>
      )}

    </nav>
  );
}