import * as React from 'react'
import TextField from '@material-ui/core/TextField'

const TextInput = (props: {
    name: string
    value: string
    onChange: (event: object) => void
    placeholder: string
    type: string
    id: string
    label: string
    className: string
}) => {
    const {
        name,
        value,
        onChange,
        placeholder,
        type,
        id,
        label,
        className,
    } = props

    return (
        <>
            <form className={className}>
                <TextField
                    id={id}
                    label={label}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    type={type}
                ></TextField>
            </form>
        </>
    )
}

export default TextInput