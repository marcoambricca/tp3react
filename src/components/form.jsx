import React, { useState } from "react";

export default function Form({handleAddCita}){
    const [formData, setFormData] = useState({
        mascotName: '',
        ownerName: '',
        matchDate: '',
        matchTime: '',
        sintomas: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleAddCita(formData);
        console.log(formData);
        setFormData({
            mascotName: '',
            ownerName: '',
            matchDate: '',
            matchTime: '',
            sintomas: ''
        });
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <label>Nombre mascota</label>
            <input type="text" value={formData.mascotName} placeholder="Nombre mascota" name="mascotName" onChange={handleChange} required/>

            <label>Nombre dueño</label>
            <input type="text" value={formData.ownerName} placeholder="Nombre dueño" name="ownerName" onChange={handleChange} required/>

            <label>Fecha</label>
            <input type="date" value={formData.matchDate} name="matchDate" onChange={handleChange} required/>

            <label>Horario</label>
            <input type="time" value={formData.matchTime} name="matchTime" onChange={handleChange} required/>

            <label>Sintomas: </label>
            <textarea name='sintomas' rows={4} value={formData.sintomas} style={{resize: "none"}} onChange={handleChange}></textarea>

            <button type="submit" className="btn submit-btn">Agregar cita</button>
        </form>
    )
}