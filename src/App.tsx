import React, { useState } from "react";
import Nav from "./components/Nav";
import "./index.scss";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

export default function App() {
  const [mode, setMode] = useState<"#121212" | "#F5F5F7">("#F5F5F7");
  const [letters, setLetters] = useState<"Modo Oscuro" | "Modo Claro">(
    "Modo Claro",
  );

  const toggleMode = () => {
    if (mode === "#F5F5F7") {
      setMode("#121212");
      setLetters("Modo Claro");
    } else {
      setMode("#F5F5F7");
      setLetters("Modo Oscuro");
    }
  };

  const textColorClass = mode === "#F5F5F7" ? "text-[#212529]" : "text-white";

  return (
    <div
      style={{ backgroundColor: mode }}
      className={`min-h-screen w-full transition-all duration-700 ease-in-out fade-in-page ${textColorClass} flex flex-col`}
    >
      <Nav
        mode={mode}
        toggleMode={toggleMode}
        letters={letters}
        textColor={textColorClass}
      />
      <Header />
      <main className="flex-1">
        <MainContent />
      </main>
      <Footer />
    </div>
  );
}
