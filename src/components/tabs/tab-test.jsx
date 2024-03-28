import Tabs from './index';

export default function TabTest() {
    const RandomComponent = () => {
        return <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus perferendis rem repudiandae consequatur ipsa, possimus culpa sint illum odit dolor labore veritatis reiciendis quos, unde, aliquam atque quas reprehenderit alias!</div>
    }
    const tabs = [
        {
            label: "Tab 1",
            content: <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</div>
        },
        {
            label: "Tab 2",
            content: <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi corporis molestias ab sit quam et impedit.</div>
        },
        {
            label: "Tab 3",
            content: <RandomComponent/>
        },
    ];

    return <Tabs tabs={tabs} />
}