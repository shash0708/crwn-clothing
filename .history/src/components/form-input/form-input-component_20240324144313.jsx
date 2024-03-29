import './form-input.styles.scss';
const FormInput =({label,inputOptions})=>{
    return(
        <div>

{   
    label && (    
     <label className={`${inputOptions.value.length ?'shrink':''}form-input-label`}>{label}</label>
    )};        <input className="form-input"{...nputOptions}/>

        </div>

    );

};

export default FormInput;