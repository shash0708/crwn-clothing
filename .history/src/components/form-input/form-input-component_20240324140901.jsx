const FormInput =({label,...otherProps})=>{
    return(
        <div>
        <label className={`${otherProps.value.length ?'shrink':''}form-input-label`}>{label}</label>
        <input {...otherProps}/>

        </div>
    );

};

export default FormInput;