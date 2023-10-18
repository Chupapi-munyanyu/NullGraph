import dynamic from "next/dynamic";

const GITHUB_JSON_LINK = "https://raw.githubusercontent.com/Chupapi-munyanyu/NullGraph/data/data.json";

async function getJson() {

  const response = await fetch(GITHUB_JSON_LINK)
  const data = await response.json();

  return data;
}


const Reagraph = dynamic(() => import("../components/Reagraph"), {
  ssr: false,
});

export default async function Home() {

  const data = await getJson();

  return (
    <main className="flex min-h-screen flex-col items-center" >
      {data && <Reagraph data={data} />}
    </main>
  )
}
