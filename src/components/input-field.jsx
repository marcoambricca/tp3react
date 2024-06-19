export default function InputField(props){
    let ph;
    if (props.type === 'date'){
        ph = 'dd/mm/aaaa'
    }
    else{
        ph = props.label
    }
    return (
        <div className="input-field">
            <label for={props.name} className="input-label">{props.label}</label>
            <input type={props.type} placeholder={ph} name={props.name} required />
        </div>
    )
}