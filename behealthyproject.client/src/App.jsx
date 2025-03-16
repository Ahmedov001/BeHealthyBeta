import React, { useState } from 'react';

const JwtTokenFrontend = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async () => {
        setError('');
        try {
            const response = await fetch('https://localhost:7148/api/Auth/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();

            if (response.ok) {
                setToken(data.Token);
            } else {
                setError(data.message || 'Login failed.');
            }
        } catch (err) {
            setError('Something went wrong.');
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="w-full max-w-sm p-4 shadow-md bg-white">
                <h2 className="text-xl font-bold text-center mb-4">Login</h2>

                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full p-2 mb-2 border border-gray-300 rounded"
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-2 mb-2 border border-gray-300 rounded"
                />

                <button onClick={handleLogin} className="w-full bg-blue-500 text-white py-2 rounded">Login</button>

                {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
                {token && (
                    <div className="mt-4">
                        <h3 className="font-bold">Token:</h3>
                        <textarea
                            readOnly
                            value={token}
                            className="w-full h-40 p-2 border mt-2 text-sm"
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default JwtTokenFrontend;
