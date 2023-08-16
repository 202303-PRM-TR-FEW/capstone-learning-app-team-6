import { courses } from "@/app/page";
import { useRouter } from "next/navigation";

const Recommended = (props) => {
  const router = useRouter();
  const reviewBtnHandler = (e) => {
    const courseId = e.target.closest("div").getAttribute("data-coureseid");
    const course = courses.find((course) => course.id === courseId);
    if (course) {
      // Navigate to the dynamic course page with the course ID
      const coursePageUrl = `/courses/${course.id}`;
      console.log(coursePageUrl);
      router.push(coursePageUrl);
    }
  };

  return (
    <section className="max-w-full  h-1/2 pt-10 p-x-5">
      <h3 className="text-slate-800 text-xl font-bold">RECOMMENDED FOR YOU</h3>
      <div
        className="flex flex-row flex-wrap gap-6 p-3 ml-2"
        onClick={reviewBtnHandler}
      >
        {props.filteredCoursesProp.map((course) => (
          <div
            className="cursor-pointer hover:outline hover:outline-2 hover:outline-blue-600 mt-5 rounded-2xl"
            key={course.id}
            data-coureseid={course.id}
          >
            <img
              className="object-fill w-72 h-60 rounded-xl"
              src={course.image}
              alt="Picture of the author"
            />

            <h2 className="text-black font-bold text-xl pl-2 mt-3">
              {course.name}
            </h2>
            <p className="text-gray-500 text-sm pl-2">{course.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Recommended;
