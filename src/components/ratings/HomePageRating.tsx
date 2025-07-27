import { StarRating } from "../../utils/userRatings";

const HomePageRating = () => {

    return (
        <div className="flex flex-col items-center w-[20%] gap-3">
            <p className="text-dark font-bold font-AlbertSans">Turning first-timers into loyal fans!</p>
            <div className="w-fit bg-primary rounded-full py-1 px-3">
                <StarRating rating={4} />
            </div>
        </div>
    );
}

export default HomePageRating;
