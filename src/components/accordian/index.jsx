import { useState } from "react"
import data from "./data"
import styles from './style.module.css';

const Accordian = () => {
    const [selected, setSelected] = useState(null);
    const [isMultiSelections, setIsMultiSelections] = useState(false);
    const [multiples, setMultiples] = useState([]);

    const handleSingleSelection = (id) => {
        setSelected(id === selected ? null : id);
    }

    const handleIsMultiSelections = () => {
        setIsMultiSelections(!isMultiSelections);
        setMultiples([]);
        setSelected(null);
    }

    const handleMultiSelection = (id) => {
        const copyMultiples = [...multiples];
        const findIndexOfCurrentId = copyMultiples.indexOf(id);

        if (findIndexOfCurrentId === -1) {
            copyMultiples.push(id);
        } else {
            copyMultiples.splice(findIndexOfCurrentId, 1);
        }

        setMultiples(copyMultiples);
    }


    return (
        <div className={styles.wrapper}>
            <button onClick={() => handleIsMultiSelections()}>
                {
                    isMultiSelections ? "Closed " : "Enable "
                }
                Multi Selection
            </button>
            <div className={styles.accordian}>
                {
                    data && data.length > 0
                        ? data.map((item, index) => (
                            <div key={index} className={styles.item}>
                                <div className={styles.title} onClick={() => isMultiSelections ? handleMultiSelection(item.id) : handleSingleSelection(item.id)}>
                                    <h3>{item.title}</h3>
                                    <span>+</span>
                                </div>
                                {isMultiSelections
                                    ? multiples.indexOf(item.id) !== -1 && (
                                        <div className={styles.content}>{item.info}</div>
                                    )
                                    : selected === item.id && (
                                        <div className={styles.content}>{item.info}</div>
                                    )
                                }
                            </div>
                        ))
                        : (
                            <div>Data not found</div>
                        )
                }
            </div>
        </div>
    )
}

export default Accordian