// hooks/useTheme.tsx
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from "react";
import { Appearance } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const THEME_KEY = "APP_THEME";

type Theme = "light" | "dark";

interface ThemeColors {
  background: string;
  text: string;
  primary: string;
}

interface ThemeContextProps {
  theme: Theme;
  colors: ThemeColors;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const colorScheme = Appearance.getColorScheme();
  const [theme, setTheme] = useState<Theme>((colorScheme as Theme) || "light");

  useEffect(() => {
    const loadTheme = async () => {
      try {
        const storedTheme = await AsyncStorage.getItem(THEME_KEY);
        if (storedTheme === "light" || storedTheme === "dark") {
          setTheme(storedTheme);
        } else {
          setTheme((colorScheme as Theme) || "light");
        }
      } catch (e) {
        console.log("Failed to load theme:", e);
      }
    };
    loadTheme();
  }, []);

  const toggleTheme = useCallback(async () => {
    const newTheme: Theme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    try {
      await AsyncStorage.setItem(THEME_KEY, newTheme);
    } catch (e) {
      console.log("Failed to save theme:", e);
    }
  }, [theme]);

  const themeColors: Record<Theme, ThemeColors> = {
    light: {
      background: "#FFFFFF",
      text: "#000000",
      primary: "#007AFF",
    },
    dark: {
      background: "#000000",
      text: "#FFFFFF",
      primary: "#0A84FF",
    },
  };

  return (
    <ThemeContext.Provider value={{ theme, colors: themeColors[theme], toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
