import { useEffect, useState } from "react";
import styles from './style.module.css';

const RandomColor = () => {
    const [type, setType] = useState('hex');
    const [color, setColor] = useState('#000000');

    const randomColorUtility = (length) => {
        return Math.floor(Math.random() * length)
    }

    const handleHEXGenerate = () => {

        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
        let hexCode = "#";

        for (let index = 0; index < 6; index++) {
            hexCode += hex[randomColorUtility(hex.length)];

        }

        setColor(hexCode);

    }
    const handleRGBGenerate = () => {
        const R = randomColorUtility(255);
        const G = randomColorUtility(255);
        const B = randomColorUtility(255);

        setColor(`rgb(${R}, ${G}, ${B})`)
    }

    useEffect(() => {
        if (type === 'rgb') {
            handleRGBGenerate()
        } else {
            handleHEXGenerate()
        }
    }, [type])

    return (
        <main className={styles.container} style={{ backgroundColor: color }}>
            <section className={styles.wrapper}>
                <button onClick={() => setType('hex')}>HEX</button>
                <button onClick={() => setType('rgb')}>RGB</button>
                <button onClick={type === 'hex' ? handleHEXGenerate : handleRGBGenerate}>Generate</button>
            </section>
            <section className={styles.content}>
                <h3>{type}: {color}</h3>
            </section>
        </main>
    )
}

export default RandomColor