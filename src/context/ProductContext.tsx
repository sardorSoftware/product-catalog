"use client"

import { createContext, useContext, type ReactNode } from "react"
import productsData from "@/products.json"

interface Product {
  id: number
  name: string
  price: number
  image?: string
  description?: string
}

interface ProductContextType {
  products: Product[]
}

const ProductContext = createContext<ProductContextType | undefined>(undefined)

export function ProductProvider({ children }: { children: ReactNode }) {
  const products = productsData

  return <ProductContext.Provider value={{ products }}>{children}</ProductContext.Provider>
}

export function useProducts() {
  const context = useContext(ProductContext)
  if (context === undefined) {
    throw new Error("useProducts must be used within a ProductProvider")
  }
  return context
}
