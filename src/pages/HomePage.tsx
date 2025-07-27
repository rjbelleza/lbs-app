import Tagline from "../components/typographies/Tagline";
import BookNowBtn from "../components/buttons/HeroButton";
import HomePageRating from "../components/ratings/HomePageRating";

const HomePage = () => {

    return(
        <div className="flex flex-col items-center gap-10 h-full w-full pt-30">
            <Tagline />
            <div className="flex gap-5">
                <BookNowBtn label="Book Now" variant="solid" path="/" />
                <BookNowBtn label="How It Works" variant="transparent" path="/" />
            </div>
            <HomePageRating />
        </div>
    )
}

export default HomePage;
