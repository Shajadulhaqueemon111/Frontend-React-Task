import { useEffect, useState } from "react";
import ProductsAllCard from "./ProductsAllCard";

const Card = () => {
  const [productsCard, setProductsCard] = useState([]);
  const [searchProduct, setSearchProduct] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch("/product.json")
      .then((res) => res.json())
      .then((data) => {
        setProductsCard(data);
        setFilteredProducts(data); // Initially set filteredProducts as all products
      });
  }, []);

  // Filter products based on search term
  useEffect(() => {
    const filtered = productsCard.filter((product) =>
      product.productName.toLowerCase().includes(searchProduct.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchProduct, productsCard]);

  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold text-center mb-10 mt-10">
          My Product Card
        </h1>
      </div>

      {/* Search Bar */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search products..."
          value={searchProduct}
          onChange={(e) => setSearchProduct(e.target.value)}
          className="border border-gray-300 p-2 rounded-lg w-1/2"
        />
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto w-3/4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductsAllCard key={product._id} products={product} />
          ))
        ) : (
          <p className="text-center col-span-full">No products found</p>
        )}
      </div>
    </div>
  );
};

export default Card;
