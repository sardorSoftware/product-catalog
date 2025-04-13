import { useRouter } from 'next/router';
import productsData from '../../products.json';

const ProductDetail = ({ product }) => {
  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>Цена: ${product.price}</p>
      <p>Описание товара: это краткое описание {product.name}.</p>
    </div>
  );
};

export const getStaticPaths = async () => {
  const paths = productsData.map((product) => ({
    params: { id: product.id.toString() },
  }));
  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const product = productsData.find((item) => item.id.toString() === params.id);
  return { props: { product } };
};

export default ProductDetail;
