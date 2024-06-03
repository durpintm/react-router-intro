import { useEffect } from "react";
import { useState } from "react";

function useIsOnline() {
  const [isOnline, setIsOnline] = useState(window.navigator.onLine);

  useEffect(() => {
    window.addEventListener("online", () => {
      setIsOnline(true);
    });

    window.addEventListener("offline", () => {
      setIsOnline(false);
    });
  }, []);

  return isOnline;
}

const App10 = () => {
  const isOnline = useIsOnline();

  if (isOnline) {
    return <div>You are online!</div>;
  }
  return <div>You are offline!</div>;
};

export default App10;
