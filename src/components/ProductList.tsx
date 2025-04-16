"use client"

import { useState } from "react"
import { useProducts } from "@/context/ProductContext"
import ProductCard from "./ProductCard"

export default function ProductList() {
  const { products } = useProducts()
  const [visibleProducts, setVisibleProducts] = useState<number>(3)
  const [searchTerm, setSearchTerm] = useState<string>("")

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const displayedProducts = filteredProducts.slice(0, visibleProducts)

  const loadMore = () => {
    setVisibleProducts((prev) => prev + 3)
  }

  return (
    <div className="product-list-container">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="product-list">
        {displayedProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>

      {visibleProducts < filteredProducts.length && (
        <button onClick={loadMore} className="load-more-btn">
          Показать больше
        </button>
      )}
    </div>
  )
}
