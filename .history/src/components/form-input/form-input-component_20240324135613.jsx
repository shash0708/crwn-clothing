const FormInput =({label,e})=>{
    return(
        <div>
        <label>{label}</label>
        <input
        type='text'
        required
        onChange={changeHandler}
        name="displayName"
        />
        </div>
    )
}