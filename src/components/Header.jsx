import { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalContext'

const Header = () => {
    const { fetchFoods } = useContext(GlobalContext);
    const [search, setSearch] = useState("");

    const handleSearch = () => {
        fetchFoods(search);
    }

    return (
        <nav className='bg-slate-300 shadow-lg'>
            <div className='relative mx-auto flex max-w-6xl justify-between items-center h-20'>
                <div className='flex items-center gap-20'>
                    <h4 className='font-bold text-2xl'>Logo</h4>
                    <div className='flex gap-6'>
                        <NavLink to={`/`} className={({ isActive }) =>
                            isActive ? "text-blue-500" : ""
                        }>Home</NavLink>
                        <NavLink to={`/favorites`} className={({ isActive }) =>
                            isActive ? "text-blue-500" : ""
                        }>Favorites</NavLink>
                    </div>
                </div>
                {/* <div className='absolute left-1/2 transform -translate-x-1/2 flex gap-2'></div> */}
                <div>
                    <input type="text" placeholder='Search food' className='w-96 px-3 py-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500 mr-1' onChange={(e) => setSearch(e.target.value)} />
                    <button className='px-3 py-2 bg-blue-500 border-2 border-blue-500 focus:border-white rounded-lg text-white' onClick={handleSearch}>Search</button>
                </div>
            </div>
        </nav>
    )
}

export default Header