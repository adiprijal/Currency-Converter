import React, { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import "./DarkModeToggle.css";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Check the saved theme in localStorage on component mount
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedMode);
    if (savedMode) {
      document.body.classList.add("dark-mode"); // Apply dark mode globally
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
    // Toggle dark mode class on the body
    document.body.classList.toggle("dark-mode");
    // Save the user's theme preference in localStorage
    localStorage.setItem("darkMode", !darkMode);
  };

  return (
    <div className="dark-mode-toggle" onClick={toggleDarkMode}>
      <div className={`slider ${darkMode ? "dark" : "light"}`}>
        <div className="icon sun">
          <FaSun />
        </div>
        <div className="icon moon">
          <FaMoon />
        </div>
      </div>
    </div>
  );
};

export default DarkModeToggle;
