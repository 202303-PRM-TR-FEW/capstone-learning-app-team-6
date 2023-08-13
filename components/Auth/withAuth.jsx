// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { getAuth, onAuthStateChanged } from "firebase/auth";
// import { auth } from "../../firebase";

// export default function withAuth(Component) {
//   return function AuthComponent(props) {
//     const router = useRouter();
//     const [isClient, setIsClient] = useState(false);

//     useEffect(() => {
//       setIsClient(true);
//       if (isClient) {
//         const auth = getAuth();
//         const unsubscribe = onAuthStateChanged(auth, (user) => {
//           if (!user) {
//             router.push("/signin");
//           }
//         });

//         return () => {
//           unsubscribe();
//         };
//       }
//     }, [isClient]);

//     // Wait until client side before rendering the component
//     if (!isClient) {
//       return null;
//     }

//     return <Component {...props} />;
//   };
// }
