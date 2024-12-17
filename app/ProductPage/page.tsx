import React from "react";

const products = [
  { id: 1, name: "Library Stool Chair", price: "$20", image: "img1.jpg", tag: "New" },
  { id: 2, name: "Library Stool Chair", price: "$20", oldPrice: "$30", image: "img2.jpg", tag: "Sale" },
  { id: 3, name: "Library Stool Chair", price: "$20", image: "img3.jpg", tag: "New" },
  { id: 4, name: "Library Stool Chair", price: "$20", image: "img4.jpg", tag: "New" },
  { id: 5, name: "Library Stool Chair", price: "$20", image: "img5.jpg", tag: "New" },
  { id: 6, name: "Library Stool Chair", price: "$20", oldPrice: "$30", image: "img6.jpg", tag: "Sale" },
  { id: 7, name: "Library Stool Chair", price: "$20", image: "img7.jpg" , tag: "New"},
  { id: 8, name: "Library Stool Chair", price: "$20", image: "img8.jpg" , tag: "New"},
];

const ProductPage = () => {
  return (
    <div className="bg-gray-50">
     {/* Main Section */}
      <main className="p-8">
        <h2 className="text-2xl font-semibold mb-6">All Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="relative bg-white shadow-md p-4 rounded-md">
              {product.tag && (
                <span className="absolute top-2 left-2 bg-teal-500 text-white px-2 py-1 text-xs font-semibold rounded">
                  {product.tag}
                </span>
              )}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-32 object-cover mb-4 rounded"
              />
              <h3 className="font-semibold text-gray-700">{product.name}</h3>
              <p className="text-gray-900 font-bold">
                {product.price}{" "}
                {product.oldPrice && (
                  <span className="text-gray-400 line-through text-sm">{product.oldPrice}</span>
                )}
              </p>
            </div>
          ))}
        </div>
      </main>

      {/* Newsletter Section */}
      <section className="bg-gray-100 py-8 text-center">
        <h3 className="text-xl font-semibold mb-4">Or Subscribe To The Newsletter</h3>
        <form className="flex justify-center">
          <input
            type="email"
            placeholder="Email Address"
            className="p-2 border rounded-l-md focus:outline-none"
          />
          <button className="bg-teal-500 text-white px-4 py-2 rounded-r-md">Submit</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-white shadow-md p-8 mt-6">
        <div className="flex justify-between">
          <div>
            <h4 className="text-teal-700 font-bold">Comforty</h4>
            <p className="text-gray-600">Vivamus tristique odio sit amet velit semper.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Categories</h4>
            <ul className="text-gray-500">
              <li>Sofa</li>
              <li>Armchair</li>
              <li>Wing Chair</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Newsletter</h4>
            <input
              type="email"
              placeholder="Your email"
              className="p-2 border rounded focus:outline-none"
            />
            <button className="bg-teal-500 text-white px-3 py-1 rounded mt-2">Subscribe</button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProductPage;
