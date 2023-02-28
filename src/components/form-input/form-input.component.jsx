import './form-input.styles.scss';

const FormInput = (props) => {
    const { label, ...otherProps} = props;
    return (
        <div className='input-container'>
            <label className={otherProps.value.length > 0 ? 'shrink': 'label'}>
                {label}
            </label>         
            <input
                {...otherProps}
            />   
        </div>
    )
}

export default FormInput;