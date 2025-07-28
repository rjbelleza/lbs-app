import TextLogo from "../logos/TextLogo";

const FormHeader = ({ label } : { label: string }) => {

    return (
        <div className="flex justify-between items-center min-w-80 border-b border-dark border-dashed font-AlbertSans py-5">
            <h1 className="text-2xl text-dark font-bold">{label}</h1>
            <TextLogo fontSize="15px" />
        </div>
    );
}

export default FormHeader;
