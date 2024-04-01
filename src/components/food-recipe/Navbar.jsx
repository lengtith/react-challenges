import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='w-full flex justify-between'>
            <div>
                <h3>Logo</h3>
            </div>
            <div>
                <input type="text" placeholder='Search food' className='w-60 px-3 py-2' />
            </div>
            <div>
                <Link to='/'>Home</Link>
                <Link to='/favorites'>Favorites</Link>
            </div>
        </nav>
    )
}

export default Navbar