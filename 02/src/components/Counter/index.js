import React, { useState } from "react";
import { Button } from "../Button";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Contador</h2>
      <p>Você clicou {count} vezes</p>
      <Button onClick={() => setCount(count + 1)}>Clique</Button>
    </div>
  );
}

export { Counter };
