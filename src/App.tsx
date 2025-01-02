import { useCallback, useState } from "react";
import "./App.css";

import Logo from "./components/logo";
import Header from "./components/header";
import Name from "./components/name";

export default function App() {
  const [isReady, setIsReady] = useState(false);

  const onReady = useCallback(() => setIsReady(true), []);

  return (
    <main className="flex flex-col items-start min-w-[300px]">
      <Logo isReady={isReady} onReady={onReady} />
      <Header isReady={isReady} />
      <Name isReady={isReady} />
    </main>
  );
}
