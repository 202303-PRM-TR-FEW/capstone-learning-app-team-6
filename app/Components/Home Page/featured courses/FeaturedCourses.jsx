import DisplayCourses from "./DisplayCourses";
import styles from "./styles/featuredCourses.module.css";

const courses = [
  {
    name: "Power BI",
    image:
      "https://images.unsplash.com/photo-1626908013351-800ddd734b8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwxMXx8bWF4aW1hbGZvY3VzfGVufDF8fHx8MTY1MjIyMDQyNA&ixlib=rb-1.2.1&q=80&w=1080",
    duration: "1h 53m",
    rate: "4.9",
    price: "24",
  },
  {
    name: "Agile Project Management",
    image:
      "https://images.unsplash.com/photo-1611224885990-ab7363d1f2a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwxfHxwcm9qZWN0JTIwbWFuYWdlbWVudHxlbnwxfHx8fDE2NTc1Mzg0Njg&ixlib=rb-1.2.1&q=80&w=1080",
    duration: "59m",
    rate: "4.3",
    price: "18",
  },
  {
    name: "Pivot Tables",
    image:
      "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwyfHxleGNlbHxlbnwxfHx8fDE2NzI5OTU0NTg&ixlib=rb-4.0.3&q=80&w=1080",
    duration: "1h 23m",
    rate: "4.6",
    price: "24",
  },
  {
    name: "Power BI",
    image:
      "https://images.unsplash.com/photo-1493612276216-ee3925520721?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwxNXx8Y29udGVudHxlbnwxfHx8fDE2NzI5OTU1OTA&ixlib=rb-4.0.3&q=80&w=1080",
    duration: "1h 17m",
    rate: "4.1",
    price: "24",
  },
];

const FeaturedCourses = () => {
  return (
    <section className={styles["features-container"]}>
      <h2 className={styles["header"]}>Featured Courses</h2>
      <ul className={`${styles["cards-container"]} mflex`}>
        <DisplayCourses AllCourses={courses}></DisplayCourses>
      </ul>
    </section>
  );
};

export default FeaturedCourses;
/*

        <li className={`${styles["course-card"]} flex`}>
          <div className={`${styles["course-image__container"]}`}>
            <img src="https://images.unsplash.com/photo-1626908013351-800ddd734b8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwxMXx8bWF4aW1hbGZvY3VzfGVufDF8fHx8MTY1MjIyMDQyNA&ixlib=rb-1.2.1&q=80&w=1080" />
          </div>
          <h3 className={styles["course-name"]}>Power BI</h3>
          <div className={`${styles["course-info"]} flex`}>
            <p className={styles["course-duration"]}>1h 53m</p>
            <p className={styles["course-rate"]}>4.9/5</p>
            <p className={styles["course-price"]}>$24</p>
          </div>
        </li>

        <li className={`${styles["course-card"]} flex`}>
          <div className={`${styles["course-image__container"]}`}>
            <img src="https://images.unsplash.com/photo-1611224885990-ab7363d1f2a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwxfHxwcm9qZWN0JTIwbWFuYWdlbWVudHxlbnwxfHx8fDE2NTc1Mzg0Njg&ixlib=rb-1.2.1&q=80&w=1080" />
          </div>
          <h3 className={styles["course-name"]}>Agile Project Management</h3>
          <div className={`${styles["course-info"]} flex`}>
            <p className={styles["course-duration"]}>59m</p>
            <p className={styles["course-rate"]}>4.3/5</p>
            <p className={styles["course-price"]}>$18</p>
          </div>
        </li>

        <li className={`${styles["course-card"]} flex`}>
          <div className={`${styles["course-image__container"]}`}>
            <img src="https://images.unsplash.com/photo-1542744173-05336fcc7ad4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwyfHxleGNlbHxlbnwxfHx8fDE2NzI5OTU0NTg&ixlib=rb-4.0.3&q=80&w=1080" />
          </div>
          <h3 className={styles["course-name"]}>Pivot Tables</h3>
          <div className={`${styles["course-info"]} flex`}>
            <p className={styles["course-duration"]}>1h 23m</p>
            <p className={styles["course-rate"]}>4.6/5</p>
            <p className={styles["course-price"]}>$24</p>
          </div>
        </li>

        <li className={`${styles["course-card"]} flex`}>
          <div className={`${styles["course-image__container"]}`}>
            <img src="https://images.unsplash.com/photo-1493612276216-ee3925520721?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwxNXx8Y29udGVudHxlbnwxfHx8fDE2NzI5OTU1OTA&ixlib=rb-4.0.3&q=80&w=1080" />
          </div>
          <h3 className={styles["course-name"]}>Power BI</h3>
          <div className={`${styles["course-info"]} flex`}>
            <p className={styles["course-duration"]}>1h 17m</p>
            <p className={styles["course-rate"]}>4.1/5</p>
            <p className={styles["course-price"]}>$24</p>
          </div>
        </li>

*/
