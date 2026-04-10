
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
  title: "single data",
  description:"this is single data"
}

const SingleBlog = async ({ params }) => {
  const {blog} = await params;

  const findData = products.find(item => item.id === parseInt(blog));


  return (
    <div className="flex flex-col justify-center items-center h-50 w-100 bg-red-100"> 
      <h1>{findData.id}</h1>
      <h1>{findData.title}</h1>
      <h2>{findData.price}</h2>
      <h3>{findData.desc}</h3>
    </div>
  )
}

export default SingleBlog