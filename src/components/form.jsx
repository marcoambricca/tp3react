import InputField from "./input-field.jsx"

export default function Form(props){
    return (
        <>
            <form action={props.setMatches}>
                <InputField name="mascotName" label="Nombre Mascota" type="text"/>
                <InputField name="ownerName" label="Nombre Dueño" type="text"/>
                <InputField name="date" label="Fecha" type="date"/>
                <InputField name="time" label="Hora" type="time"/>
                <label htmlFor="sintomas" id="textarea-label">Sintomas: </label>
                <textarea name='sintomas' rows={4}></textarea>
                <input type="submit" value='Agregar cita'></input>
            </form>
        </>
    )
}