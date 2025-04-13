export interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    description?: string;
  }
  
  export interface AppContextType {
    products: Product[];
    loadedProducts: Product[];
    cart: Product[];
    visibleCount: number;
    hasMore: boolean;
    loadMore: () => void;
    addToCart: (product: Product) => void;
    removeFromCart: (productId: number) => void;
    searchProducts: (query: string) => void;
  }