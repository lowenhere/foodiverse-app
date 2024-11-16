import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { getLocalStorage } from "@/lib/localstorage";

const key = "foodiverse:settings";

export type Settings = {
  authProvider: "privy" | "dynamic";
};

const defaultSettings = {
  authProvider: "privy",
};

const loadSettingsFromLocalStorage = () => {
  const localStorage = getLocalStorage();
  if (!localStorage) {
    return defaultSettings;
  }

  const data = localStorage.getItem(key);
  if (!data) {
    return defaultSettings;
  }

  return {
    ...defaultSettings,
    ...JSON.parse(data),
  };
};

const setSettingsToLocalStorage = (settings: Object) => {
  const localStorage = getLocalStorage();
  if (!localStorage) {
    return;
  }

  localStorage.setItem(key, JSON.stringify(settings));
};

const SettingsContext = createContext<
  | {
      settings: Settings;
      updateSettings: (settings: Partial<Settings>) => void;
    }
  | undefined
>(undefined);

// Create the SettingsProvider component
export const SettingsProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [settings, setSettings] = useState(loadSettingsFromLocalStorage());

  useEffect(() => {
    setSettingsToLocalStorage(settings);
  }, [settings]);

  const updateSettings = (updates: Partial<Settings>) => {
    setSettings({
      ...settings,
      ...updates,
    });
  };

  return (
    <SettingsContext.Provider value={{ settings, updateSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};

// Create the useSettings hook
export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error("useSettings must be used within a SettingsProvider");
  }
  return context;
};
