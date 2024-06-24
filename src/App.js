import { useState } from "react";
import Form from "./components/form";
import List from "./components/list.jsx";
import Modal from './components/modal.jsx';
import './index.css'

function App() {
  const [arrayCitas, setArrayCitas] = useState([]);
  
  const handleAddCita = (cita) => {
    setArrayCitas([...arrayCitas, cita]);
  }

  const [citaAEliminar, setCitaAEliminar] = useState();
  const [showModal, setShowModal] = useState(false);

  const deleteCita = (target) => {
    setCitaAEliminar(target);
    setShowModal(true);
  };

  const handleDelete = (target) =>{
    let mascotName = target.target.id
    const updatedArray = arrayCitas.filter(cita => cita.mascotName !== mascotName);
    setArrayCitas(updatedArray);
    setShowModal(false);
  }

  return (
    <div className="App"> 
      <Form handleAddCita={handleAddCita}/>
      <List arrayCitas={arrayCitas} onDeleteCita={deleteCita}/>
      {showModal && <Modal h1={'¿Desea eliminar esta cita?'} setter={(value) => {
            if (value) {
              handleDelete(citaAEliminar); 
            }
            setShowModal(false); 
          }}
          isOpen={setShowModal}
      />}
    </div>
  );
}

export default App;
