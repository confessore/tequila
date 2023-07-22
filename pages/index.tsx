import Loading from "@/components/loading";
import { Tequila } from "@/lib/tequilas";
import { Suspense, useEffect, useState } from "react";
import Image from "next/image"

export const metadata = {
  title: "Tequila",
  description: "",
};

export default function Home() {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState({} as Tequila)

    useEffect(() => {
      setLoading(true)
      getData()
        .then((response) => response)
        .then((data) => {
          setData(data)
          setLoading(false)
        })
        .catch((error) => console.log(error))
    }, [])
  if (loading) return <div>loading...</div>

  return (
    <Suspense fallback={Loading()}>
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <a href={data['href']}><Image src={data['src']} alt="" width={256} height={256} className="rounded-full"></Image></a>
        <h1>{data['name']}</h1>
        <h2>{data['description']}</h2>
        <h3>{data['about']}</h3>
      </div>
    </Suspense>
  );
}

async function getData() {
  var url = 'https://tequila.balasolu.com/api/tequila'
  if (process.env.NODE_ENV === "development")
    url = 'http://localhost:3000/api/tequila'
  const response = await fetch(url)
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!response.ok) {
      // This will activate the closest `error.js` Error Boundary
      console.log('Failed to fetch data')
  }
  return response.json()
}