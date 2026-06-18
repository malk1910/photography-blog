import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1 style={{ fontSize: "120px", margin: 0 }}>404</h1>

      <h2>Page Not Found</h2>

      <p>
        Sorry, the page you are looking for doesn't exist
      </p>

      <Link
        to="/"
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          textDecoration: "none",
          border: "1px solid #000",
          borderRadius: "5px",
        }}
      >
        Back to Home
      </Link>
    </div>
  );
}

export default NotFound;