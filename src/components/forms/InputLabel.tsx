import type { LabelProps } from "../../types";

const InputLabel = ({ ref, label, fontSize } : LabelProps ) => {

    const defaultStyle = "text-dark ml-2 font-AlbertSans";
    const size = {
        sm: `text-sm ${defaultStyle}`,
        md: `text-md ${defaultStyle}`,
        xl: `text-xl ${defaultStyle}`,
        xxl: `text-2xl ${defaultStyle}`
    };

    return (
        <label 
            htmlFor={ref}
            className={size[fontSize]}
        >
            {label}
        </label>
    );
}

export default InputLabel;
