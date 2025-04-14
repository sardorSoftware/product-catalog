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
  const products: Product[] = productsData

  return <ProductContext.Provider value={{ products }}>{children}</ProductContext.Provider>
}

export const useProducts = (): ProductContextType => {
  const context = useContext(ProductContext)
  if (!context) {
    throw new Error("useProducts must be used within a ProductProvider")
  }
  return context
}
