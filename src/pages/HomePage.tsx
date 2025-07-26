import Tagline from "../components/typographies/Tagline";
import BookNowBtn from "../components/buttons/HeroButton";

const HomePage = () => {

    return(
        <div className="flex flex-col items-center gap-10 h-full w-full pt-30">
            <Tagline />
            <div className="flex gap-5">
                <BookNowBtn name="Book Now" variant="solid" path="/" />
                <BookNowBtn name="How It Works" variant="transparent" path="/" />
            </div>
        </div>
    )
}

export default HomePage;
