import { createContext, useState, useContext } from "react";

export const ColorModeContext = createContext();

export function ColorModeProvider({ children }) {
  const [current, setCurrent] = useState("light");

  function toggle() {
    setCurrent(current === "light" ? "dark" : "light");
  }

  return (
    <ColorModeContext.Provider
      value={{
        current,
        toggle,
      }}
    >
      {children}
    </ColorModeContext.Provider>
  );
}

export const useColorMode = () => useContext(ColorModeContext);