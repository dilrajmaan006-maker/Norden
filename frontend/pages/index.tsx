import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-3xl font-bold tracking-widest">NORDEN</div>
          <div className="hidden md:flex gap-8">
            <Link href="/shop" className="hover:text-gray-400 transition">Shop</Link>
            <Link href="/about" className="hover:text-gray-400 transition">About</Link>
            <Link href="/contact" className="hover:text-gray-400 transition">Contact</Link>
            <Link href="/cart" className="hover:text-gray-400 transition">Cart</Link>
          </div>
          <Link href="/auth/login" className="bg-white text-black px-6 py-2 font-semibold hover:bg-gray-200 transition">
            Sign In
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 text-center">
        <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-6 pt-12">
          Luxury Redefined
        </h1>
        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          Experience premium clothing crafted for the discerning individual
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/shop" className="bg-white text-black px-8 py-4 font-bold text-lg hover:bg-gray-200 transition">
            Shop Now
          </Link>
          <Link href="/about" className="border border-white px-8 py-4 font-bold text-lg hover:bg-white hover:text-black transition">
            Learn More
          </Link>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold mb-12">Featured Collection</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-gray-900 p-6 hover:bg-gray-800 transition cursor-pointer">
              <div className="aspect-square bg-gray-800 mb-4 rounded flex items-center justify-center">
                <span className="text-gray-600 text-lg">Product Image</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium T-Shirt</h3>
              <p className="text-gray-400 mb-4">Crafted from the finest materials</p>
              <p className="text-2xl font-bold">$99.99</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-black py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">Shop</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#">All Products</Link></li>
                <li><Link href="#">New Arrivals</Link></li>
                <li><Link href="#">Sale</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#">About</Link></li>
                <li><Link href="#">Blog</Link></li>
                <li><Link href="#">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#">Contact</Link></li>
                <li><Link href="#">FAQ</Link></li>
                <li><Link href="#">Shipping</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#">Privacy</Link></li>
                <li><Link href="#">Terms</Link></li>
                <li><Link href="#">Cookies</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 NORDEN. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
