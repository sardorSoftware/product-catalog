import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <h1>Добро пожаловать в наш каталог товаров</h1>
      <Link href="/products">
        <a>Перейти в каталог товаров</a>
      </Link>
    </div>
  );
};

export default HomePage;
