const courses = [
  {
    name: "Building ios15 App",
    author: "Tom Collins",
    category: "test",
    description: "test",
    duration: "test",
    level: "test",
    price: 24,
    image:
      "https://assets.api.uizard.io/api/cdn/stream/4f91c603-603d-44e2-ab35-65be1763f022.jpg",
    rate: "",
    value: 11,
    content: [
      { name: "Introduction", videos: 1 },
      { name: "1. Software setup", videos: 3 },
      { name: "2. UI Fundamentals", videos: 6 },
      { name: "3. Testing and Finishing", videos: 2 },
      { name: "Skill Test", videos: 1 },
    ],
  },
  {
    name: "Becoming a Photographer",
    author: "Clara Manning",
    value: 69,
    category: "test",
    description: "test",
    rate: "",
    duration: "test",
    price: 24,
    level: "test",
    content: {},
    image:
      "https://www.nyip.edu/media/zoo/images/3-ways-to-become-a-better-photographer-1_19a9ab40eb62ec202806518ffdb67b08.jpg",
  },
  {
    name: "Design Thinking 2.0",
    author: "Chris Kinley",
    value: 27,
    image:
      "https://assets.api.uizard.io/api/cdn/stream/2c1a496b-9948-4cb1-b87e-dbd417261382.jpg",
  },
  {
    name: "Product Photography",
    author: "Lena Gold",
    value: 11,
    image:
      "https://assets.api.uizard.io/api/cdn/stream/937fc2b0-e1c5-4a5a-93f7-34d23cd5ca6d.jpg",
  },
  {
    name: "Learn how to make portraits",
    author: "Maria Silver",
    value: 27,
    image:
      "https://i.etsystatic.com/21944704/r/il/2a028b/3175957310/il_fullxfull.3175957310_3802.jpg",
  },
  ,
  {
    name: "Typeface Design",
    author: "Gary Saltz",
    value: 27,
    image:
      "https://assets.api.uizard.io/api/cdn/stream/8a82fb6d-e077-4930-b16d-a47ec1537f4a.jpg",
  },
  {
    name: "Excel: Formulas and functions",
    author: "Mike Curtis",
    value: 27,
    image:
      "https://assets.api.uizard.io/api/cdn/stream/6b7ace23-9ec2-4b4e-963f-c0097a8bba79.jpg",
  },
];

export default function Home() {
  return (
    <main
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <h1 style={{ fontSize: "24px", fontWeight: 600 }}>
        This is the (landing) page
        <br />
        Try Navigating to:
        <br />
        <a href="/home" style={{ color: "blue" }}>
          home
        </a>
        <br />
        <a href="/search" style={{ color: "blue" }}>
          {" "}
          search{" "}
        </a>
      </h1>
    </main>
  );
}

export { courses };
