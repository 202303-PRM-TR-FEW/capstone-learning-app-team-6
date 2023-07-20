import Categories from "@/Components/Home Page/categories/Categories";
import FeaturedCourses from "@/Components/Home Page/featured courses/FeaturedCourses";
import MyLearning from "@/Components/Home Page/my learning/MyLearning";
import styles from "./homePage.module.css";
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
