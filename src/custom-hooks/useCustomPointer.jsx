// src/useCustomPointer.js
import { useEffect, useState } from "react";

function useCustomPointer(content) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.body.style.cursor = "none"; // nasconde il cursore
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.body.style.cursor = ""; // ripristina il cursore
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: position.y,
        left: position.x,
        pointerEvents: "none",
        transform: "translate(-50%, -50%)",
        zIndex: 9999,
        fontSize: "24px",
      }}
    >
      {typeof content === "string" ? content : content}
    </div>
  );
}

export default useCustomPointer;
