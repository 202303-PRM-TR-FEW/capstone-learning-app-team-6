import Categories from "@/components/Home Page/categories/Categories";
import FeaturedCourses from "@/components/Home Page/featured courses/FeaturedCourses";
import MyLearning from "@/components/Home Page/my learning/MyLearning";

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
