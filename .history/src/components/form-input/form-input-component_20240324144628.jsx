import './form-input.styles.scss';
const FormInput =({label,inputOptions})=>{
    return(
        <div className='group'>
        <input className=''

{   
    label && (    
     <label className={`${inputOptions.value.length ?'shrink':''}form-input-label`}>{label}</label>
    )};        <input className="form-input"{...inputOptions}/>

        </div>

    );

};

export default FormInput;