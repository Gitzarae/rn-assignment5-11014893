import React, { createContext, useState, useEffect } from "react";
import { useColorScheme, Appearance } from "react-native";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const systemTheme = useColorScheme();
  const [isDarkMode, setIsDarkMode] = useState(systemTheme === "dark");

  useEffect(() => {
    const listener = (preferences) => {
      const colorScheme = preferences.colorScheme;
      setIsDarkMode(colorScheme === "dark");
    };
    Appearance.addChangeListener(listener);

    return () => {
      Appearance.removeChangeListener(listener);
    };
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((previousState) => !previousState);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
