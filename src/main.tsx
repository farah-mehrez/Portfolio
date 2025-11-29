import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

console.log("Main.tsx loaded");
console.log("Root element:", document.getElementById("root"));

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

console.log("Creating React root...");

try {
  const root = createRoot(rootElement);
  console.log("Rendering App...");
  root.render(<App />);
  console.log("App rendered successfully");
} catch (error) {
  console.error("Failed to render app:", error);
  rootElement.innerHTML = `
    <div style="color: white; padding: 20px; font-family: Arial; background: red;">
      <h1>Error Loading App</h1>
      <p>${error instanceof Error ? error.message : String(error)}</p>
      <p>Check the browser console for more details.</p>
    </div>
  `;
}
