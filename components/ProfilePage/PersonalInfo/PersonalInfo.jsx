import Image from "next/image";
import Styles from "./styles/PersonalInfo.module.css";

const profile = {
  image: "/../public/images/image.jpg",
  name: "Sally",
  last: "Robins",
  city: "NEW YORK",
  course: 0,
  followers: 2,
  following: 32,
};

const Profile = () => {
  return (
    <div className={`main flex flex-row gap-x-5 p-4 ${Styles.main}`}>
      <div>
        <Image
          className={`rounded-full ${Styles.img}`}
          src={profile.image}
          width={1000}
          height={1000}
          alt="Picture of the author"
        />
      </div>

      <div className="w-92 h-32">
        <h1 className={`text-xl text-slate-800 font-bold ${Styles.name}`}>
          {profile.name + " " + profile.last}
        </h1>
        <p
          className={`flex gap-1 text-xs text-gray-600 font-bold mt-1 pl-2 ${Styles.citye}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-3 h-3"
          >
            <path
              fillRule="evenodd"
              d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
              clipRule="evenodd"
            />
          </svg>

          {profile.city}
        </p>
        <div className={`flex flex-row rounded-lg text-center ${Styles.box}`}>
          <div className={`bg-gray-200 rounded-l-[20px] ${Styles.gryBox}`}>
            <p
              className={`"text-gray-800 font-bold text-2xl" ${Styles.numbers}`}
            >
              {profile.course}
            </p>
            <h3 className={`"text-gray-600 text-sm font-bold" ${Styles.text}`}>
              My COURSES
            </h3>
          </div>

          <div className={`bg-gray-200 ${Styles.gryBox}`}>
            <p
              className={`"text-gray-800 font-bold text-2xl" ${Styles.numbers}`}
            >
              {profile.followers}
            </p>
            <h3 className={`"text-gray-600 text-sm font-bold " ${Styles.text}`}>
              FOLLOWERS
            </h3>
          </div>

          <div className={`bg-gray-200 rounded-r-[20px] ${Styles.gryBox}`}>
            <p
              className={`"text-gray-800 font-bold text-2xl" ${Styles.numbers}`}
            >
              {profile.following}
            </p>
            <h3 className={`"text-gray-600 text-sm font-bold" ${Styles.text}`}>
              FOLLOWING
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
