import Link from "next/link"
const getStaticprops = ({ product }) => {
  return (
    <div className="my-12">
      {product.map(pr => (
        <div className="border-2 shadow-sm border-gray-200 rounded p-3 space-y-4 my-4" key={pr.id}>
          <p> Title: {pr.title}</p>
          <p> Description: {pr.description}</p>
          <p> ${pr.price}</p>
          <Link href={`products/${pr.id}`} className='font-medium text-blue-600 dark:text-blue-500 hover:underline'>
            <p> Get here</p>
          </Link>
        </div>
      ))
      }
    </div>
  )
}
export async function getStaticProps() {
  // Run API calls in parallel
  const productsResponse = await fetch('https://fakestoreapi.com/products')
  const products = await productsResponse.json()
  return {
    props: {
      product: products
    },
  }
}
export default getStaticprops
