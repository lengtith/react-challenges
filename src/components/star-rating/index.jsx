import { useState } from "react";
import { FaStar } from "react-icons/fa";
import styles from './style.module.css';

const StarRating = ({ noOfStars }) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    const handleClick = (getCurrentIndex) => {
        setRating(getCurrentIndex);
    }

    const handleMouseMove = (getCurrentIndex) => {
        setHover(getCurrentIndex);
    }

    const handleMouseLeave = () => {
        setHover(rating);
    }

    return (
        <div className="star-rating">
            {
                [...Array(noOfStars)].map((_, index) => {
                    index += 1

                    return <FaStar
                        key={index}
                        className={index <= (hover || rating) ? styles.active: styles.inactive}
                        onClick={() => handleClick(index)}
                        onMouseMove={() => handleMouseMove(index)}
                        onMouseLeave={() => handleMouseLeave()}
                        size={40} />
                })
            }
        </div>
    )
}

export default StarRating