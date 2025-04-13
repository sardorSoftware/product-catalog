import Image from "next/image"
import Link from "next/link"

interface ProductCardProps {
  id: number
  name: string
  price: number
  image?: string
  description?: string
}

export default function ProductCard({ id, name, price, image }: ProductCardProps) {
  return (
    <Link href={`/products/${id}`} className="product-card">
      <div className="product-image">
        <Image
          src={image || `/placeholder.svg?height=200&width=200&text=${encodeURIComponent(name)}`}
          alt={name}
          width={200}
          height={200}
          className="image"
        />
      </div>
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <p className="product-price">${price}</p>
      </div>
    </Link>
  )
}
