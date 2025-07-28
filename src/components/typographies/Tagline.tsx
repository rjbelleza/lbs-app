
const Tagline = () => {

    return (
        <div className="relative flex flex-col items-center space-y-8 z-50">
            <img 
                src="../../src/assets/icons/glitter.png"
                className="absolute h-15 -top-5 -right-15"
            />
            <h1 className="text-7xl text-primary font-Allura">From Dirty to Dazzling</h1>
            <h3 className="text-2xl text-dark font-Alkatra">Just a Tap Away!</h3>
            <p className="max-w-[560px] text-dark text-center font-AlbertSans">
                Our online laundry booking service makes laundry day effortless by letting you 
                schedule pickups and deliveries straight from your phone or computer. 
            </p>
        </div>
    );
}

export default Tagline;
