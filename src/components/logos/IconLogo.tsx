
const IconLogo = ({ height } : { height: string }) => {

    return (
         <img 
            src="../../src/assets/icons/logo.png" 
            alt="Logo" 
            className={`h-${height}`}
        />
    );
}

export default IconLogo;
