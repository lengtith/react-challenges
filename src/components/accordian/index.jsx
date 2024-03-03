import { useState } from "react"
import data from "./data"
import './index.css'

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
        <div className="wrapper">
            <button onClick={() => handleIsMultiSelections()}>
                {
                    isMultiSelections ? "Closed " : "Enable "
                }
                Multi Selection
            </button>
            <div className="accordian">
                {
                    data && data.length > 0
                        ? data.map((item, index) => (
                            <div key={index} className="item">
                                <div className="title" onClick={() => isMultiSelections ? handleMultiSelection(item.id) : handleSingleSelection(item.id)}>
                                    <h3>{item.title}</h3>
                                    <span>+</span>
                                </div>
                                {isMultiSelections
                                    ? multiples.indexOf(item.id) !== -1 && (
                                        <div className="content">{item.info}</div>
                                    )
                                    : selected === item.id && (
                                        <div className="content">{item.info}</div>
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