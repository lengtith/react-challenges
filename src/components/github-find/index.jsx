import { useState } from 'react'
import './style.css'

const GithubFind = () => {
    const [username, setUsername] = useState('');
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        
        try {
            const response = await fetch(`https://api.github.com/users/${username}`);
            if (response.ok) {
                const userData = await response.json();
                setUser(userData);
            } else {
                setUser(null)
                throw new Error('User not found');
            }
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className='github'>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name='search-username'
                        placeholder='Search Github Username'
                        onChange={(e) => setUsername(e.target.value)} />
                    <button type='submit'>Search</button>
                </form>

                {loading && <p>Loading...</p>}
                {error && <p>{error}</p>}
                {
                    user && (
                        <>
                            <div>
                                <img src={user.avatar_url} alt="User" className='avatar' />
                            </div>
                            <div>
                                <a href={`https://github.com/${user.login}`}>{user.name || user.login}</a>
                            </div>
                        </>
                    )
                }
            </div>
        </div>
    )
}

export default GithubFind