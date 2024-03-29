const FormInput =({label,...otherProps})=>{
    return(
        <div>
        <label className={`${ohter}`}>{label}</label>
        <input {...otherProps}/>

        </div>
    );

};

export default FormInput;