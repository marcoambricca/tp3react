import InputField from "./input-field.jsx"

export default function Form(props){
    return (
        <>
            <InputField name="mascot-name" label="Nombre Mascota" type="text"/>
            <InputField name="owner-name" label="Nombre Dueño" type="text"/>
            <InputField name="date" label="Fecha" type="date"/>
            <InputField name="time" label="Hora" type="time"/>
            <textarea name='sintomas' rows={4}></textarea>
            <input type="submit" value='submit'></input>
        </>
    )
}