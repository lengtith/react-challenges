import { useState } from "react"
import data from "./data"
import './index.css'

const Accordian = () => {
    const [selected, setSelected] = useState(null);

    const handleSingleSelection = (id) => {
        setSelected(id === selected ? null : id);
    }
    return (
        <div className="wrapper">
            <div className="accordian">
                {
                    data && data.length > 0
                        ? data.map((item, index) => (
                            <div key={index} className="item">
                                <div className="title" onClick={() => handleSingleSelection(item.id)}>
                                    <h3>{item.title}</h3>
                                    <span>+</span>
                                </div>
                                {selected === item.id
                                    ? (
                                        <div className="content">
                                            {item.info}
                                        </div>
                                    )
                                    : null}
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