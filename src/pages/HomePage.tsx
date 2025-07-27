import Tagline from "../components/typographies/Tagline";
import BookNowBtn from "../components/buttons/HeroButton";
import HomePageRating from "../components/ratings/HomePageRating";

const HomePage = () => {

    return(
        <div className="flex flex-col justify-center items-center gap-10 h-full w-full pt-30 px-10">
            <Tagline />
            <div className="flex gap-5">
                <BookNowBtn label="Book Now" variant="solid" path="/" />
                <BookNowBtn label="How It Works" variant="transparent" path="/" />
            </div>
            <div className="w-full mt-5">
                <HomePageRating />
            </div>
        </div>
    )
}

export default HomePage;
