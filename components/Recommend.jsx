import Image from "next/image"

const courses = [
  {
    "id": 1,
    "image":"/../public/image.jpeg",
    "name":"UX Essentials",
    "author":"Don Draper"
  },
  {
    "id": 2,
    "image":"/../public/image.jpeg",
    "name":"UX Research",
    "author":"Chris Kinley"
  },
  {
    "id": 3,
    "image":"/../public/image.jpeg",
    "name":"UX for Beginners",
    "author":"Ben Starter"
  },
  {
    "id": 4,
    "image":"/../public/image.jpeg",
    "name":"How to UX?",
    "author":"Anna May"
  },
]

const Recommended = () => {
  return (

    <div className="bg-slate-200 h-1/2 w-screen p-5">
      <h3 className="text-slate-800 font-bold">
        RECOMMENDED FOR YOU
      </h3>
      <div className="flex flex-row flex-wrap gap-4 ml-2">
        {/* the loop start */}
        {courses.map((course) => (
          
          <div key={course.id}>
            <Image
              className="mt-5  rounded-xl"
              src={course.image}
              width={200}
              height={200}
              alt="Picture of the author"
            />

            <h2 className="text-black font-bold text-l mt-3">{course.name}</h2>
            <p className="text-gray-500 text-xs">{course.author}</p>
          </div>
        ))}
      {/* the loop ends */}
      </div>
    </div>
  )
}

export default Recommended