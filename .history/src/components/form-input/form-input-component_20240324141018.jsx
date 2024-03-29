const FormInput =({label,...otherProps})=>{
    return(
        <div>

{   
    label="Email"    
     <label className={`${otherProps.value.length ?'shrink':''}form-input-label`}>{label}</label>
}        <input className="form-input"{...otherProps}/>

        </div>
    );

};

export default FormInput;