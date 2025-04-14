import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import productsData from "@/products.json";

// Optional: Strong type for a product item
type Product = {
  id: number;
  name: string;
  description?: string;
  price: number;
  image?: string;
};

type PageProps = {
  params: {
    id: string;
  };
};

// Generate metadata for each product page
export async function generateMetadata({ params }: PageProps) {
  const product = (productsData as Product[]).find(
    (p) => p.id === Number.parseInt(params.id)
  );

  if (!product) {
    return {
      title: "Product Not Found",
      description: "The requested product could not be found",
    };
  }

  return {
    title: `${product.name} | Product Catalog`,
    description: product.description,
  };
}

// Page Component
export default function ProductPage({ params }: PageProps) {
  const product = (productsData as Product[]).find(
    (p) => p.id === Number.parseInt(params.id)
  );

  if (!product) {
    notFound();
  }

  return (
    <div className="product-detail">
      <Link href="/products" className="back-btn">
        <span className="back-icon">←</span>
        Вернуться к продуктам
      </Link>

      <div className="product-card detail">
        <div className="product-image">
          <Image
            src={
              product.image ||
              `/placeholder.svg?height=300&width=300&text=${encodeURIComponent(product.name)}`
            }
            alt={product.name}
            width={300}
            height={300}
            className="image"
          />
        </div>

        <div className="product-info">
          <h1 className="product-name">{product.name}</h1>
          <p className="product-price">${product.price}</p>
          <p className="product-description">
            {product.description || "No description available."}
          </p>
        </div>
      </div>
    </div>
  );
}
