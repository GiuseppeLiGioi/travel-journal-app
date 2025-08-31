
import {useState, useEffect} from "react"

export default function useStorage(key, initialValue) {
  // Legge dal localStorage all'inizio
  const [value, setValue] = useState(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}