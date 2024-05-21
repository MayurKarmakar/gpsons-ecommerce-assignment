import { useState, useEffect } from "react";

function getStorageValue<T>(key: string, defaultValue: T): T {
  if (typeof window === "undefined") {
    return defaultValue;
  }

  const saved = localStorage.getItem(key);

  if (saved !== null) {
    return JSON.parse(saved) as T;
  }
  return defaultValue;
}

function useLocalStorage<T>(): [
  T | null,
  React.Dispatch<React.SetStateAction<T | null>>
] {
  const [value, setValue] = useState<T | null>(() => {
    return getStorageValue<T | null>("token", null);
  });

  useEffect(() => {
    localStorage.setItem("token", JSON.stringify(value));
  }, [value]);

  return [value, setValue];
}

export { useLocalStorage };
