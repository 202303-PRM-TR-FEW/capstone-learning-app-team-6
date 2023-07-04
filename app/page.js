import Image from "next/image";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-free/js/all.js";

let category = [
  { icon: "fa-solid fa-chart-line", name: "Sales" },
  { icon: "fa-solid fa-users-line", name: "HR" },
  { icon: "fa-solid fa-bezier-curve", name: "Drawing" },
  { icon: "fa-solid fa-table", name: "Big Data" },
  { icon: "fa-solid fa-pen-ruler", name: "Design" },
  { icon: "fa-solid fa-lightbulb", name: "Markiting" },
  { icon: "fa-solid fa-star", name: "Astronomy" },
];

export default function Home() {
  return (
    <main>
      <Categories />
    </main>
  );
}

function Categories() {
  return (
    <div className="parent">
      <ul className="container">
        {category.map((category) => (
          <>
            <li className={category.icon}>
              <p className="text">{category.name}</p>
            </li>
          </>
        ))}
      </ul>
    </div>
  );
}
