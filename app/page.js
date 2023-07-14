import Navbar from "@/components/Navbar";
import Profile from "@/components/Profile";
import Recommended from "@/components/Recommend";


export default function Home() {
  return (
    <main className="flex flex-grow">
      <Navbar/>
      <div className="w-screen h-1/2">
        <Profile/>
        <Recommended/>
      </div>
    </main>
  );
}
