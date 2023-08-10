import { getDocs, collection, addDoc, query, where } from "firebase/firestore";
import db from "@/firebase.js";

export const fetchCourses = async () => {
  const courseCollection = collection(db, "courses");
  const courseSnapshot = await getDocs(courseCollection);
  return courseSnapshot.docs.map((doc) => doc.data());
};

export const fetchSavedCourses = async () => {
  const querySnapshot = await getDocs(collection(db, "savedCourses"));
  let courses = [];
  querySnapshot.forEach((doc) => {
    courses.push(doc.data());
  });
  return courses;
};

export const checkIfBookmarked = async (courseName) => {
  const q = query(
    collection(db, "savedCourses"),
    where("name", "==", courseName)
  );
  const querySnapshot = await getDocs(q);
  return !querySnapshot.empty;
};

export const bookmarkCourse = async (course) => {
  await addDoc(collection(db, "savedCourses"), {
    name: course.name,
    image: course.image,
    duration: course.duration,
    rate: course.rate,
    price: course.price,
  });
};

/*
import { getDocs, collection, addDoc, query, where } from "firebase/firestore";
import db from "@/firebase.js";

let fetchedCourses = [];

export const fetchCourses = async () => {
  const courseCollection = collection(db, "courses");
  const courseSnapshot = await getDocs(courseCollection);
  return courseSnapshot.docs.map((doc) => doc.data());
};

export const fetchSavedCourses = async () => {
  const querySnapshot = await getDocs(collection(db, "savedCourses"));
  let courses = [];
  querySnapshot.forEach((doc) => {
    courses.push(doc.data());
  });
  fetchedCourses = [...courses];
  console.log(courses);
  console.log(fetchedCourses);
  return courses;
};
// export const fetchSavedCourses = async () => {
//   const querySnapshot = await getDocs(collection(db, "savedCourses"));
//   let courses = [];
//   querySnapshot.forEach((doc) => {
//     // Include the document id as the 'id' property in the course data
//     const courseData = { id: doc.id, ...doc.data() };
//     courses.push(courseData);
//   });
//   fetchedCourses = [...courses];
//   // console.log(courses);
//   // console.log(fetchedCourses);
//   return courses;
// };

export const checkIfBookmarked = async (courseName) => {
  const q = query(
    collection(db, "savedCourses"),
    where("name", "==", courseName)
  );
  const querySnapshot = await getDocs(q);
  return !querySnapshot.empty;
};

export const bookmarkCourse = async (course) => {
  await addDoc(collection(db, "savedCourses"), {
    name: course.name,
    image: course.image,
    duration: course.duration,
    rate: course.rate,
    price: course.price,
  });
};

export { fetchedCourses };
*/
