import type { RatingProps } from "../../types";


const StarType = ({ starType } : { starType: 'rated' | 'unrated' }) => {
    
    const stars = {
        rated: 'rated-star.png',
        unrated: 'unrated-star.png'
    };

    return (
        <img
            src={`../../src/assets/icons/${stars[starType]}`}
            style={{height: '30px'}}
        />
    );
};


export const StarRating = ({ rating, totalStars = 5 } : RatingProps) => {

    const starsToRender: ('rated' | 'unrated')[] = [];
    const roundedRating = Math.floor(rating);

    for (let i = 0; i < totalStars; i++) {
        if (i < roundedRating) {
            starsToRender.push('rated');
        }
        else if (i === roundedRating && rating % 1 !== 0) {
            starsToRender.push('rated');
        } 
        else {
            starsToRender.push('unrated');
        }
    } 

    return (
        <div className="flex">
            {starsToRender.map((type, index) => (
                <StarType key={index} starType={type} />
            ))}
        </div>
    );
}
