import { getDocs, collection, addDoc, query, where } from "firebase/firestore";
import db from "@/firebase.js";
import { firestore } from "@/firebase.js";

export const userRef = firestore.collection("users").doc("userOne");

export const fetchCourses = async () => {
  const courseCollection = collection(db, "courses");
  const courseSnapshot = await getDocs(courseCollection);
  return courseSnapshot.docs.map((doc) => doc.data());
};
export const addCourseToSaved = async (courseId) => {
  try {
    await userRef.update({
      savedCourses: firestore.FieldValue.arrayUnion(courseId),
    });
    console.log("Course added to saved!");
  } catch (error) {
    console.error("Error adding course to saved: ", error);
  }
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
    description: course.description,
    duration: course.duration,
    level: course.level,
    rate: course.rate,
    value: course.value,
    category: course.category,
    author: course.author,
  });
};
