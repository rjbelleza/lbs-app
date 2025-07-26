
const IconLogo = ({ height } : { height: string }) => {

    return (
        <img 
            src="../../src/assets/icons/logo.png"
            alt="QuickFold logo"
            style={{ height: `${height}` }}
        />
    );
}

export default IconLogo;
