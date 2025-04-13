import Link from "next/link"

export default function Home() {
  return (
    <div className="home-page">
      <h1>Добро пожаловать в каталог продукции</h1>
      <p>Просмотрите нашу коллекцию продуктов</p>
      <Link href="/products" className="btn">
      Посмотреть продукты
      </Link>
    </div>
  )
}
