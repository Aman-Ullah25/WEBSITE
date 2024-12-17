import React from "react";

export default function About() {
  return (
    <div className="font-sans text-gray-700">
     
      {/* About Us Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 px-10 py-16">
        <div className="bg-teal-600 text-white p-8 rounded-lg">
          <h1 className="text-3xl font-bold mb-4">About Us - Comforty</h1>
          <p className="text-lg mb-6">
            At Comforty, we believe that the right chair can transform your
            space and elevate your comfort. Specializing in ergonomic design,
            premium materials, and modern aesthetics, we craft chairs that
            seamlessly blend style with functionality.
          </p>
          <button className="bg-white text-teal-600 px-4 py-2 rounded hover:bg-gray-100">
            View collection
          </button>
        </div>
        <div>
          <img
            src="https://via.placeholder.com/500"
            alt="Chair"
            className="rounded-lg w-full"
          />
        </div>
      </section>

      {/* Brand Difference Section */}
      <section className="text-center py-10">
        <h2 className="text-2xl font-bold mb-8">What Makes Our Brand Different</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-10">
          <div className="p-6 border rounded-lg hover:shadow-lg">
            <h3 className="text-lg font-bold mb-2">Next day as standard</h3>
            <p>Order before 2pm and get your order the next day as standard</p>
          </div>
          <div className="p-6 border rounded-lg hover:shadow-lg">
            <h3 className="text-lg font-bold mb-2">Made by true artisans</h3>
            <p>Handmade crafted goods made with real passion and craftsmanship</p>
          </div>
          <div className="p-6 border rounded-lg hover:shadow-lg">
            <h3 className="text-lg font-bold mb-2">Unbeatable prices</h3>
            <p>For our materials and quality you won't find better prices</p>
          </div>
          <div className="p-6 border rounded-lg hover:shadow-lg">
            <h3 className="text-lg font-bold mb-2">Recycled packaging</h3>
            <p>We use 100% recycled to ensure our footprint is manageable</p>
          </div>
        </div>
      </section>

      {/* Popular Products */}
      <section className="py-10 px-10">
        <h2 className="text-2xl font-bold text-center mb-8">Our Popular Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <img
              src="https://via.placeholder.com/300"
              alt="Sofa"
              className="w-full rounded-lg mb-4"
            />
            <h3 className="font-bold">The Poplar Suede Sofa</h3>
            <p>$99.00</p>
          </div>
          <div className="text-center">
            <img
              src="https://via.placeholder.com/300"
              alt="Dandy Chair"
              className="w-full rounded-lg mb-4"
            />
            <h3 className="font-bold">The Dandy Chair</h3>
            <p>$99.00</p>
          </div>
          <div className="text-center">
            <img
              src="https://via.placeholder.com/300"
              alt="Wooden Chair"
              className="w-full rounded-lg mb-4"
            />
            <h3 className="font-bold">The Wooden Chair</h3>
            <p>$99.00</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-10">
          <div>
            <h2 className="text-teal-500 font-bold text-lg mb-4">Comforty</h2>
            <p>
              Vivamus tristique odio sit amet velit semper, eu posuere turpis
              interdum.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-white mb-4">Category</h3>
            <ul>
              <li>Sofa</li>
              <li>Armchair</li>
              <li>Desk Chair</li>
              <li>Wooden Chair</li>
              <li>Park Bench</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-white mb-4">Newsletter</h3>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="p-2 flex-1 rounded-l bg-gray-700 text-white focus:outline-none"
              />
              <button className="bg-teal-500 px-4 py-2 rounded-r text-white hover:bg-teal-400">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </footer>
    </div>
  );
}
