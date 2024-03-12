import { useEffect, useState } from 'react'
import style from './style.module.css';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';

const imagesUrl = "https://picsum.photos/v2/list?page=1&limit=5";

const ImageSlider = () => {
    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [errorMsg, setErrorMsg] = useState(null)
    const [loading, setLoading] = useState(false)

    const fetchImages = async (url) => {
        try {
            setLoading(true);
            const res = await fetch(url);
            const data = await res.json();
            console.log(data)
            if (data) {
                setImages(data);
                setLoading(false);
            }
        } catch (error) {
            setErrorMsg(error.message);
            setLoading(false);
        }
    }

    useEffect(() => {
        if (imagesUrl) {
            fetchImages(imagesUrl)
        }
    }, []);

    if (loading) {
        return <div>Loading data! Please wait...</div>
    }

    if (errorMsg !== null) {
        return <div>Error occured! {errorMsg}</div>
    }

    const handlePrevious = () => {
        setCurrentSlide(currentSlide === 0 ? images.length -1 : currentSlide - 1)
    }

    const handleNext = () => {
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1)
    }

    return (
        <div className={style.container}>
            <BsArrowLeftCircleFill className={`${style.arrow} ${style.arrowLeft}`} onClick={handlePrevious}/>
            {
                images && images.length
                    ? images.map((image, index) => (
                        <img key={image.id} src={image.download_url} alt="image" className={ currentSlide === index ? style.currentImage : style.currentImage+ " " + style.hideCurrentImage} />
                    ))
                    : null
            }
            <BsArrowRightCircleFill className={`${style.arrow} ${style.arrowRight}`} onClick={handleNext}/>
            <span className={style.circleIndicators}>
                {
                    images && images.length
                        ? images.map((_, index) => (
                            <button key={index} className={style.currentIndicator}></button>
                        ))
                        : null
                }
            </span>
        </div>
    )
}

export default ImageSlider