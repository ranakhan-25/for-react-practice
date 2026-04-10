import Card from "./Card";

const products = [
  {
    id: 1,
    title: "Laptop",
    desc: "High performance laptop for work and gaming",
    price: 1200
  },
  {
    id: 2,
    title: "Smartphone",
    desc: "Latest model smartphone with great camera",
    price: 800
  },
  {
    id: 3,
    title: "Headphones",
    desc: "Noise cancelling over-ear headphones",
    price: 150
  },
  {
    id: 4,
    title: "Keyboard",
    desc: "Mechanical keyboard with RGB lighting",
    price: 100
  },
  {
    id: 5,
    title: "Mouse",
    desc: "Wireless ergonomic mouse",
    price: 50
  }
];

export const metadata = {
  title: "blogs page",
  description:"this is blog page"
}

const BlogPage = () => {

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 border-2 border-blue-500 p-3 rounded-xl m-2">
      {
        products.map(item => <Card key={item.id} product={item} />)
      }
    </div>
  )
}

export default BlogPage