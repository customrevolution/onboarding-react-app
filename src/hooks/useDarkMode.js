import { useEffect, useState } from "react";

const useDarkMode = (initialState = false) => {
  const [enabled, setEnabled] = useState(initialState);

  useEffect(() => {
    const className = "dark-mode";
    const element = window.document.body;
    if (enabled) {
      element.classList.add(className);
    } else {
      element.classList.remove(className);
    }
  }, [enabled]);

  return [enabled, setEnabled];
};
export default useDarkMode;
