const getServersideprops = ({ data }) => {
  return (
    <div className="my-12">
      <h2 className='text-4xl font-extrabold dark:text-gray-900'>Load page with Server side data </h2>
      {data.map(dt => (
        <div className="border-2 shadow-sm border-gray-200 rounded p-3 space-y-2 my-4">
          <h3 className='my-4 text-2xl text-gray-800'> {dt.name.firstname} {dt.name.lastname}</h3>
          <p className='my-4 text-lg text-gray-800 font-bold'> {dt.email}</p>
          <p className='my-4 text-lg text-gray-500 uppercase'> {dt.address.city}</p>
          <p className='my-4 text-lg text-gray-800'> {dt.phone}</p>
        </div>
      ))}
    </div>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch('https://fakestoreapi.com/users')
  const data = await res.json()
  // Pass data to the page via props
  return { props: { data } }
}

export default getServersideprops
