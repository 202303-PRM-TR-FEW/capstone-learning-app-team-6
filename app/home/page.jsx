import Categories from "@/components/HomePage/Categories/Categories";
import FeaturedCourses from "@/components/HomePage/FeaturedCourses/FeaturedCourses";
import MyLearning from "@/components/HomePage/MyLearning/MyLearning";

const Home = (props) => {
  return (
    <main className="home-container">
      <FeaturedCourses />
      <Categories />
      <MyLearning />
    </main>
  );
};

export default Home;
