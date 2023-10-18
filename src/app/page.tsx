'use client'

import Reagraph from "@/components/Reagraph";
import { Data } from "@/components/data";
import { useEffect, useState } from "react";

const GITHUB_JSON_LINK = "https://raw.githubusercontent.com/Chupapi-munyanyu/NullGraph/master/data.json";

async function getJson() {

  const response = await fetch(GITHUB_JSON_LINK)
  const data = await response.json();

  return data;
}

export default function Home() {

  const [data, setData] = useState<Data>();

  useEffect(() => {
    getJson().then(response =>
      setData(response))
  }, [])


  return (
    <main className="flex min-h-screen flex-col items-center" >
      {data && <Reagraph data={data} />}
    </main>
  )
}
