import { useEffect, useState } from 'react'
import './scroll.css'

const ScrollIndicator = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('')
    const [scrollPercentage, setScrollPercentage] = useState(0);

    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await fetch('https://dummyjson.com/products?limit=100');
            const data = await response.json();

            if (data && data.products && data.products.length > 0) {
                setData(data.products);
                setLoading(false);
            }

        } catch (error) {
            console.log(error.message);
            setErrorMessage(error.message);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const handleScrollPercentage = () => {
        const howMuchScroll = document.body.scrollTop || document.documentElement.scrollTop;

        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight

        setScrollPercentage((howMuchScroll *100)/ height);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScrollPercentage)

        return () => {
            window.removeEventListener('scroll', () => { })
        }
    }, [])

    if (errorMessage) {
        return <div>Error! {errorMessage}</div>
    }

    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <div className="top-container"></div>
            <h1>Scroll Indicator</h1>
            <div className="scroll-progress-tracking-container">
                <div className="current-progress-bar" style={{ width: scrollPercentage + "%" }}></div>
            </div>
            <div className='data-container'>
                {
                    data && data.length > 0
                        ? data.map(item => (
                            <p key={item.id}>{item.title}</p>
                        ))
                        : null
                }
            </div>
        </div>
    )
}

export default ScrollIndicator