"use client"

import Link from "next/link"
import { useProducts } from "@/context/ProductContext"
import Image from "next/image"

export default function ProductsPage() {
  const { products } = useProducts()

  return (
    <div className="products-page">
      <h1>Наши продукты</h1>
      <div className="product-list">
        {products.map((product) => (
          <Link href={`/products/${product.id}`} key={product.id} className="product-card">
            <div className="product-image">
              <Image
                src={product.image || `/placeholder.svg?text=${encodeURIComponent(product.name)}`}
                alt={product.name}
                width={200}
                height={200}
              />
            </div>
            <div className="product-info">
              <h2>{product.name}</h2>
              <p>${product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
