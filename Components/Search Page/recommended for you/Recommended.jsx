import Image from "next/image";

const courses = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1569098644956-02996eb711b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHw4MHx8dXh8ZW58MXx8fHwxNjczMDE4Nzcy&ixlib=rb-4.0.3&q=80&w=1080",
    name: "UX Essentials",
    author: "Don Draper",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwyfHx1eCUyMGRlc2lnbiUyMHxlbnwxfHx8fDE2NzMwMTc0MDg&ixlib=rb-4.0.3&q=80&w=1080",
    name: "UX Research",
    author: "Chris Kinley",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1618788372246-79faff0c3742?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHw0fHx1eCUyMGRlc2lnbnxlbnwxfHx8fDE2NzMwMTkwOTQ&ixlib=rb-4.0.3&q=80&w=1080",
    name: "UX for Beginners",
    author: "Ben Starter",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1547027072-332f09bd6bb3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHw0Mnx8dXglMjBkZXNpZ258ZW58MXx8fHwxNjczMDE5MTc5&ixlib=rb-4.0.3&q=80&w=1080",
    name: "How to UX?",
    author: "Anna May",
  },
];

const Recommended = () => {
  return (
    <div className="max-w-full h-1/2 w-screen p-5">
      <h3 className="text-slate-800 font-bold">RECOMMENDED FOR YOU</h3>
      <div className="flex flex-row flex-wrap gap-4 ml-2">
        {/* the loop start */}
        {courses.map((course) => (
          <div key={course.id}>
            <Image
              className="mt-5  rounded-xl"
              src={course.image}
              width={200}
              height={2}
              alt="Picture of the author"
            />

            <h2 className="text-black font-bold text-l mt-3">{course.name}</h2>
            <p className="text-gray-500 text-xs">{course.author}</p>
          </div>
        ))}
        {/* the loop ends */}
      </div>
    </div>
  );
};

export default Recommended;
