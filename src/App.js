import { useState } from "react";
import Form from "./components/form";

function App() {
  const [matches, setMatches] = useState([]);
  return (
    <>
      <div className="app">
        <Form />
      </div>
    </>
  );
}

export default App;
