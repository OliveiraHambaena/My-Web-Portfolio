import React, { useState } from "react";
// import { BrowserRouter } from "react-router-dom"; // removed
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import TargetCursor from "./components/TargetCursor";

export default function App() {
  const [current, setCurrent] = useState("home");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderPage = () => {
    switch (current) {
      case "home":
        return <Home current={current} onNav={setCurrent} />;
      case "about":
        return <About current={current} onNav={setCurrent} />;
      case "projects":
        return <Projects current={current} onNav={setCurrent} />;
      case "contact":
        return <Contact current={current} onNav={setCurrent} />;
      default:
        return <Home current={current} onNav={setCurrent} />;
    }
  };

  return (
    // removed BrowserRouter wrapper
    <>
      <TargetCursor spinDuration={2} hideDefaultCursor={true} />
      <div className="app-root">
        <Sidebar
          open={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          onNav={(p) => {
            setCurrent(p);
          }}
          current={current}
        />
        <div className="content-area">
          <Navbar
            onNav={(page) => {
              setCurrent(page);
              setSidebarOpen(false);
            }}
            onToggleSidebar={() => setSidebarOpen((s) => !s)}
            current={current}
          />
          <main className="page-container">{renderPage()}</main>
        </div>
      </div>
    </>
  );
}
