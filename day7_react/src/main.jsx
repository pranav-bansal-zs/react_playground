import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ThemeContextProviderComponent } from "./ThemeContextProvide.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "lightblue",
      }}
    >
      <h1>Front Page</h1>
    </div>
    <ThemeContextProviderComponent>
      <App />
    </ThemeContextProviderComponent>
  </>
);
