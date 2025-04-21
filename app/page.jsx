import client from "@/lib/contentfull";
import Image from "next/image";

async function main() {
  const entry = await client.getEntry('7ch4gJr8tLuUL31cOq7KiA');
  console.log(entry)
}


export default async function Home() {
  main()
  return (
    <div className="p-8">
      {/* <h1>{entry.fields.title}</h1> */}
    </div>
  );
}
