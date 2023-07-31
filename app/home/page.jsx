import Categories from "@/Components/HomePage/Categories/Categories";
import FeaturedCourses from "@/Components/HomePage/FeaturedCourses/FeaturedCourses";
import MyLearning from "@/Components/HomePage/MyLearning/MyLearning";

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
