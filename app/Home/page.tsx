// pages/index.js
import React from "react";
const Home = () => {
  return (
    <div className="bg-gray-100">
      
      {/* Hero Section */}
      <section className="container mx-auto py-8 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Best Furniture Collection For Your Interior.
        </h2>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg mt-4">
          Shop Now
        </button>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto py-8">
        <h3 className="text-2xl font-bold mb-4">Featured Products</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="bg-white p-4 rounded-lg shadow flex flex-col items-center"
            >
              <img
                src="https://via.placeholder.com/150"
                alt="Product"
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <h4 className="text-lg font-bold mt-2">Library Stool Chair</h4>
              <p className="text-gray-600">$20</p>
              <button className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>
  
      <section className="container mx-auto py-8">
        <h3 className="text-2xl font-bold mb-4">Top Catogeries</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-white p-4 rounded-lg shadow flex flex-col items-center"
            >
              <img
                src="https://via.placeholder.com/150"
                alt="Product"
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <h4 className="text-lg font-bold mt-2">Library Stool Chair</h4>
              <p className="text-gray-600">$20</p>
              <button className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>
      <div>
      </div>
      
    </div>
  );
};

export default Home;
