import './form-input.styles.scss';
const FormInput =({label,inputOptions})=>{
    return(
        <div>

{   
    label && (    
     <label className={`${nputOptions.value.length ?'shrink':''}form-input-label`}>{label}</label>
    )};        <input className="form-input"{...otherProps}/>

        </div>

    );

};

export default FormInput;