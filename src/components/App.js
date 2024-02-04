import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <ShoppingList />
    </div>
  );
}

export default App;
