const FormInput =({label,...otherProps})=>{
    return(
        <div>
        <label className={`${otherProps.value.length}?'shrink`}>{label}</label>
        <input {...otherProps}/>

        </div>
    );

};

export default FormInput;