export default function Card(props){
    return(
        <>
            <div className="card">
                <span>Mascota: {props.mascota}</span>
                <span>Dueño: {props.duenio}</span>
                <span>Fecha: {props.fecha}</span>
                <span>Hora: {props.hora}</span>
                <span>Sintomas: {props.sintomas}</span>
                <button onclick={props.handleDelete}>Eliminar</button>
            </div>
        </>
    )
}