import React, { useState, useEffect, useRef } from "react";

const App: React.FC = () => {
  const [color, setColor] = useState<string>("#ffffff");
  const prevColor = useRef<string>("");

  useEffect(() => {
    prevColor.current = document.body.style.backgroundColor || "";
    document.body.style.backgroundColor = color;
    return () => {
      document.body.style.backgroundColor = prevColor.current;
    };
  }, [color]);

  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    setColor((e.target as HTMLInputElement).value);
  };

  return (
    <div style={{ padding: 20 }}>
      <label htmlFor="inputColor" style={{ marginRight: 8 }}>
        Elige color:
      </label>
      <input
        id="inputColor"
        type="color"
        value={color}
        onInput={handleInput}
        aria-label="Selector de color"
      />
      <p style={{ marginTop: 12 }}>Color actual: {color}</p>
    </div>
  );
};

export default App;