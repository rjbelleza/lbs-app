
const TextLogo = ({ fontSize } : { fontSize: string }) => {

    return (
        <>
            <h1 className={`text-dark`} style={{fontSize: `${fontSize}`}}>
                Quick
                <span className="font-bold text-light">Fold.</span>
            </h1>       
        </>
    );
}

export default TextLogo;
