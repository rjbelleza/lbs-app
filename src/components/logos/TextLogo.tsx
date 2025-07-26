
const TextLogo = ({ fontSize } : { fontSize: string }) => {

    return (
        <>
            <h1 className={`text-white`} style={{fontSize: `${fontSize}`}}>
                Quick
                <span className="font-bold text-lime">Fold.</span>
            </h1>       
        </>
    );
}

export default TextLogo;
