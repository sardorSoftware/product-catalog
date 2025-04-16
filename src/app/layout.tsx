import { ReactNode } from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ProductProvider } from "@/context/ProductContext"
import "@/styles/global.scss"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Каталог продукции",
  description: "Просмотрите нашу коллекцию продуктов",
}

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <ProductProvider>
          <main>
            <header className="header">
              <div className="container">
                <a href="/" className="logo">Каталог продукции</a>
                <nav>
                  <ul className="nav-list">
                    <li>
                      <a href="/products" className="nav-link">Продукты</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </header>
            <div className="container main-content">{children}</div>
          </main>
        </ProductProvider>
      </body>
    </html>
  )
}
