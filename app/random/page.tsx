import Image from 'next/image'

export default async function Page() {
    const data = await getData()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {data['id']}
        {data['name']}
        <Image src={data['src']} alt="" width={750} height={750}></Image>
    </main>
  )
}

async function getData() {
    const res = await fetch('http://localhost:3000/api/tequila', { cache: 'no-store' })
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    // Recommendation: handle errors
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()
}