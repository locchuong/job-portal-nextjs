"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Page() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div>
      <p>Current theme: {resolvedTheme}</p>
      <button onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}>
        <span>Toggle Theme</span>
      </button>
    </div>
  );
}
