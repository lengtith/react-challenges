import { useState } from "react";
import './tabs.css'

const Tabs = ({ tabs }) => {
    const [currentTab, setCurrentTab] = useState(0);

    const handleTab = (index) => {
        setCurrentTab(index);
    }
    return (
        <div className='wrapper'>
            <div className="heading">
                {
                    tabs.map((tab, index) => (
                        <div key={tab.label} onClick={() => handleTab(index)} className={`${currentTab === index ? 'active' : ""}`}>
                            <span className='label'>{tab.label}</span>
                        </div>
                    ))
                }
            </div>
            <div className="content">
                {
                    tabs[currentTab] && tabs[currentTab].content
                }
            </div>
        </div>
    )
}

export default Tabs