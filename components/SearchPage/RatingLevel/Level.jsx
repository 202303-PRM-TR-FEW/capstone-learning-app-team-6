"use client";
import { useState } from "react";

import styles from "./styles/level.module.css";
let category = [
  { id: "beginner", name: "Beginner" },
  { id: "intermediate", name: "Intermediate" },
  { id: "professional", name: "Professional" },
];
const Level = (props) => {
  const [categoriesChecked, setCategoriesChecked] = useState([]);

  // Function to handle checkbox change
  const handleCheckboxChange = (event, categoryId) => {
    const isChecked = event.target.checked;
    if (isChecked) {
      setCategoriesChecked([...categoriesChecked, categoryId]);
      console.log(categoriesChecked);
    } else {
      setCategoriesChecked(categoriesChecked.filter((id) => id !== categoryId));
      console.log(categoriesChecked);
    }
  };

  return (
    <section>
      <h2 className={styles.header}>LEVEL</h2>
      <ul>
        {category.map((category) => (
          <li className={styles.category} key={category.id}>
            <input
              type="checkbox"
              className={styles.checkbox}
              id={category.id}
              checked={categoriesChecked.includes(category.id)}
              onChange={(event) => handleCheckboxChange(event, category.id)}
            />
            <label htmlFor={category.id}>{category.name}</label>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Level;

// "use client";
// import { useState } from "react";

// import styles from "./styles/level.module.css";
// let category = [
//   { name: "Beginner" },
//   { name: "Intermediate" },
//   { name: "Professional" },
// ];
// const Level = (props) => {
//   let categoriesChecked = [];
//   const [level, setLevel] = useState("");

//   return (
//     <section>
//       <h2 className={styles.header}>LEVEL</h2>
//       <ul>
//         {category.map((category) => (
//           <li className={styles.category}>
//             <input type="checkbox" className={styles.checkbox} />
//             {category.name}
//           </li>
//         ))}
//       </ul>
//     </section>
//   );
// };

// export default Level;
