import { useId, useRef, useState } from "react";

export default function Field({ type, label, defaultValue = '', name, pattern, ...props }) {
    const [value, setValue] = useState(defaultValue);
    const id = useId();

    return (
        <div className="field">
            <label htmlFor={id} className="label">{label}</label>
            <input
                type={type}
                value={value}
                onChange={e => setValue(e.target.value)}
                name={name}
                id={id}
                pattern={pattern}
                className='input'
                {...props}
            />
        </div>
    )
}