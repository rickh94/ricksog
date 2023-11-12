export default function Home() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        padding: "0 0.5rem",
      }}
    >
      <h1
        style={{
          fontWeight: "bold",
          fontSize: "3rem",
        }}
      >
        This is my api for creating og images automatically
      </h1>
      <a
        href="https://github.com/rickh94/ricksog"
        target="_blank"
        rel="noreferrer"
        style={{
          color: "blue",
          textDecoration: "underline",
        }}
      >
        View the Code
      </a>
    </main>
  );
}
