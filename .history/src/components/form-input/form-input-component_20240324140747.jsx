const FormInput =({label,...otherProps})=>{
    return(
        <div>
        <label className={``}>{label}</label>
        <input {...otherProps}/>

        </div>
    );

};

export default FormInput;