import Link from "next/link";


const Card = ({ product }) => {
  const { id, title, desc, price } = product;
  return (
    <div className="flex flex-col justify-center items-center border-2 border-red-500 p-3 rounded-xl">
      <p className="font-bold">{id}</p>
      <h1 className="text-2xl font-medium">{title}</h1>
      <h1>{desc}</h1>
      <h1 className="text-red-500 font-bold">{price}</h1>
      <Link href={`/blogs/${id}`}><button className="btn">click</button></Link>
    </div>
  )
}


export default Card