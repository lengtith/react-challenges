import { NavLink } from 'react-router-dom'

const Header = () => {

    return (
        <nav className='bg-slate-300 shadow-lg sticky top-0'>
            <div className='relative mx-auto flex max-w-6xl justify-between items-center h-20'>
                <div className='flex items-center gap-20'>
                    <h4 className='font-bold text-2xl'>Logo</h4>
                    <div className='flex gap-6'>
                        <NavLink to={`/`} className={({ isActive }) =>
                            isActive ? "text-blue-500" : ""
                        }>Home</NavLink>
                        <NavLink
                            to={`/cart`}
                            className={({ isActive }) => isActive ? "text-blue-500" : "" + "relative"}>
                            Cart
                            {/* {favoritesList.length > 0 && <span className='absolute w-1 h-1 rounded bg-red-400 top-0 right-0'></span>} */}
                        </NavLink>
                    </div>
                </div>
                {/* <div className='absolute left-1/2 transform -translate-x-1/2 flex gap-2'></div> */}
            </div>
        </nav>
    )
}

export default Header