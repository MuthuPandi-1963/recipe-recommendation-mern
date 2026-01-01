import { useContext, useState, useEffect } from 'react';
import { Button } from '../components/ui/button';
import { ProductContext } from '../Context/ProductContext';

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImg, setCurrentImg] = useState(null);
  const { front } = useContext(ProductContext);

  // Update image when front changes
  useEffect(() => {
    if (!front) return;
    setCurrentImg(front);
  }, [front]);

  // Optional slideshow logic (only if front is an array)
  useEffect(() => {
    if (!front || !Array.isArray(front) || front.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % front.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [front]);

  return (
    <div
      className="h-screen w-full bg-cover bg-center md:flex md:flex-col justify-center  text-white px-6  "
      style={{ backgroundImage: `url(${currentImg})` }}
    >
      <div className="bg-white  bg-opacity-50 p-6 rounded-lg text-center max-w-2xl">
        <h1 className="text-4xl font-bold mb-4 text-black">Happy to Announce</h1>
        <p className="text-lg text-black font-medium mb-6">
          Log in for great deals and offers on{' '}
          <span className="text-yellow-300">RecipeRec</span>
        </p>
        <Button className="w-full">Explore More</Button>
      </div>
    </div>
  );
}
