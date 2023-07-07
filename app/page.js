import Navbar from "@/components/Navbar";
import Recommended from "@/components/Recommend";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-grow">
      <Navbar/>
      <Recommended/>
    </main>
  );
}
