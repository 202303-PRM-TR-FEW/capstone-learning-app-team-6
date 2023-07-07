import Image from "next/image"
const Recommended = () => {
  return (
    <div className="bg-slate-300 h-1/2 w-screen p-5">
      <h3 className="text-slate-800 font-bold">
        RECOMMENDED FOR YOU
      </h3>
      <div className="flex flex-row gap-4 ml-2">
        <div>
          <Image
            className="mt-5  rounded-xl"
            src="/../public/image.jpeg"
            width={200}
            height={200}
            alt="Picture of the author"
          />
          <h2 className="text-black font-bold text-l mt-3">UX Essentials</h2>
          <p className="text-gray-500 text-xs">Don Draper</p>
        </div>

        <div>
          <Image
            className="mt-5  rounded-xl"
            src="/../public/image.jpeg"
            width={200}
            height={200}
            alt="Picture of the author"
          />
          <h2 className="text-black font-bold text-l mt-3">UX Research</h2>
          <p className="text-gray-500 text-xs">Chris Kinley</p>
        </div>

        <div>
          <Image
            className="mt-5  rounded-xl"
            src="/../public/image.jpeg"
            width={200}
            height={200}
            alt="Picture of the author"
          />
          <h2 className="text-black font-bold text-l mt-3">UX for Beginners</h2>
          <p className="text-gray-500 text-xs">Ben Starter</p>
        </div>


        <div>
          <Image
            className="mt-5  rounded-xl"
            src="/../public/image.jpeg"
            width={200}
            height={200}
            alt="Picture of the author"
          />
          <h2 className="text-black font-bold text-l mt-3">How to UX?</h2>
          <p className="text-gray-500 text-xs">Anna May</p>
        </div>


      </div>
    </div>
  )
}

export default Recommended