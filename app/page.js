import Navbar from "@/components/Navbar";
import Profile from "@/components/Profile";
import Recommended from "@/components/Recommend";
import Image from "next/image";

const courses = [
  {
    "image":"image path",
    "name":"course name",
    "author":"course author",
  }
]

console.log(courses)
export default function Home() {
  return (
    <main className="flex flex-grow">
      <Navbar/>
      <div>
        <Recommended/>
        <Profile/>
      </div>
    </main>
  );
}
