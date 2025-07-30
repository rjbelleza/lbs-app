import type { SubmitButtonProps } from "../../types";

const FormButton = ({ type, label, disabled } : SubmitButtonProps) => {

    return (
        <button
            type={type}
            disabled={disabled}
            className="bg-dark text-white max-w-[90%] min-w-[90%] mx-auto py-2 cursor-pointer rounded font-AlbertSans hover:bg-light transition-all"
        >
            {label}
        </button>
    );
}

export default FormButton;
