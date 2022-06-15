import { FormInputLabel, Input, Group } from './form-input.styles';

const FormInput = ({handleChange, label, ...otherProps}) => (
    <Group>
        <Input onChange={handleChange} {...otherProps} />
        {
            label ?
            (<FormInputLabel shrink={otherProps.value.length} >
                {label}
            </FormInputLabel>)
            : null
        }  
    </Group>
)

export default FormInput;