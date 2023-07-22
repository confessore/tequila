import Image from 'next/image'

export default async function Page() {
  const data = await getData()
  if (data === null) return <div>phase production build</div>
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <a href={data['href']}><Image src={data['src']} alt="" width={256} height={256} className="rounded-full"></Image></a>
        <h1>{data['name']}</h1>
        <h2>{data['description']}</h2>
        <h3>{data['about']}</h3>
    </main>
  )
}

async function getData() {
  var url = 'https://tequila.balasolu.com/api/tequila'
  if (process.env.NODE_ENV === "development")
    url = 'http://localhost:3000/api/tequila'
  const response = await fetch(url, { next: { revalidate: 0 }, cache: 'no-store' })
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    // Recommendation: handle errors
    if (!response.ok) {
        // This will activate the closest `error.js` Error Boundary
        console.log('Failed to fetch data')
    }
    return response.json()
}