import { MetadataProvider } from "vite-plugin-pages-metadata";
import { BrowserRouter, useRoutes } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { StrictMode, Suspense } from "react";
import Navbar from "./components/navbar";
import { metadata } from "./metadata";
import routes from "~react-pages";
import "./index.css";

function App() {
  return <Suspense fallback={<p>Loading...</p>}>{useRoutes(routes)}</Suspense>;
}

const app = createRoot(document.getElementById("root")!);

app.render(
  <StrictMode>
    <BrowserRouter>
      <MetadataProvider metadata={metadata} routes={routes}>
        <Navbar />
        <main className="mt-24 inline-block">
          <App />
        </main>
      </MetadataProvider>
    </BrowserRouter>
  </StrictMode>
);
