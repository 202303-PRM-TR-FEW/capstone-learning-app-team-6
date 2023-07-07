import Navbar from "@/components/Navbar";
import Recommended from "@/components/Recommended";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-row">
      <Navbar/>
      <Recommended/>
    </main>
  );
}
