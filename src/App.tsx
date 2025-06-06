import { useState } from "react";
import { AddInputValue, GifGrid, Title } from "./components";

function App() {
  const [items, setItems] = useState<string[]>([]);

  const onNewValue = (value: string) => {
    const trimedValue = value.trim();
    if (trimedValue.length <= 1 || items.includes(value)) return;
    setItems([...items, value]);
  };

  return (
    <>
      <Title title="404: Héroe No Encontrado" />
      <AddInputValue onNewValue={onNewValue} />

      <ol>
        {items.map((iv) => (
          <GifGrid key={iv + new Date().toString()} title={iv} />
        ))}
      </ol>
    </>
  );
}

export default App;
