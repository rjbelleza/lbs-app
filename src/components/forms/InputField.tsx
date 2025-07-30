import type { InputFieldProps } from "../../types";

const InputField = ({
    name,
    placeholder,
    id,
    required
} : InputFieldProps ) => {

    

    return (
        <input 
            id={id}
            name={name}
            className="border-b bg-secondary border-light w-[90%] px-3 py-2 mt-1 mb-5 focus:border-dark focus:outline-none font-AlbertSans mx-auto"
            placeholder={placeholder}
            required={required}
        />
    );
}

export default InputField;
