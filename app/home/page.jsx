import Categories from "@/Components/Home Page/Categories/Categories";
import FeaturedCourses from "@/Components/Home Page/FeaturedCourses/FeaturedCourses";
import MyLearning from "@/Components/Home Page/MyLearning/MyLearning";

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
