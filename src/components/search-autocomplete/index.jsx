import { useState, useEffect } from 'react';
import './style.css';

const SearchAutoComplete = () => {
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);
    const [searchUser, setSearchUser] = useState('');
    const [error, setError] = useState(null);

    const fetchUsers = async () => {
        setLoading(true);
        try {
            const response = await fetch('https://dummyjson.com/users');

            if (response.ok) {
                const userData = await response.json();
                setUsers(userData.users.map(user => user.firstName));
                setError(null);
            } else {
                throw new Error('Users not found');
            }
        } catch (error) {
            console.log(error.message);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const filterUsers = users.filter(user => user.toLowerCase().startsWith(searchUser.toLowerCase().trim()));

    const handleSearchUser = (search) => {
        setSearchUser(search)
    }

    return (
        <div>
            <input
                type="text"
                value={searchUser}
                onChange={(e) => setSearchUser(e.target.value)}
                placeholder='Search user' />
            {loading && <p>Loading ...</p>}
            {filterUsers && filterUsers.length > 0
                ? filterUsers.map((user, index) => (
                    <p
                        key={index}
                        onClick={() => handleSearchUser(user)}>
                        {user}
                    </p>
                ))
                : <p>Not found</p>}
            {error && <p>{error}</p>}
        </div>
    );
};

export default SearchAutoComplete;