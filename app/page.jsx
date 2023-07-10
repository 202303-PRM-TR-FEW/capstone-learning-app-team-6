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
