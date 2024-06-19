import { useState } from "react";
import Form from "./components/form";

function App() {
  const [matches, setMatches] = useState([]);
  const handleAddMatch = (form) => {
    setMatches([...matches], {mascotName: Form.mascotName, ownerName: Form.ownerName, date: Form.date, time: Form.time, sintomas: Form.sintomas})
  }
  return (
    <>
      <div className="app">
        <Form setMatches={handleAddMatch}/>
      </div>
    </>
  );
}

export default App;
