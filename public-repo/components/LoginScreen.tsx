import React, { useState } from 'react';

interface LoginScreenProps {
    onLoginSuccess: (username: string) => void;
}

const validUsers = [
    { username: 'Adri', password: '1234' },
    { username: 'Ivan', password: '1234' }
];

const HyroxLogo = () => (
    <div className="inline-block bg-black rounded-full p-1 mb-6 border-2 border-amber-400 shadow-lg shadow-amber-500/10">
        <div className="w-20 h-20 sm:w-24 sm:h-24 bg-black rounded-full flex items-center justify-center">
            <span className="text-amber-400 text-4xl sm:text-5xl font-black tracking-tighter -mt-1">H</span>
        </div>
    </div>
);

const LoginScreen: React.FC<LoginScreenProps> = ({ onLoginSuccess }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const trimmedUsername = username.toLowerCase().trim();
        const foundUser = validUsers.find(user => user.username.toLowerCase() === trimmedUsername && user.password === password);

        if (foundUser) {
            setError('');
            onLoginSuccess(foundUser.username);
        } else {
            setError('Usuario o contraseña inválidos.');
        }
    };

    return (
        <div className="bg-[#0c0c0c] min-h-screen flex flex-col items-center justify-center p-4">
            <div className="w-full max-w-sm text-center">
                <HyroxLogo />
                <h1 className="text-3xl sm:text-4xl font-black text-amber-400 mb-8 tracking-tighter">HYROX</h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <input
                            type="text"
                            placeholder="Usuario"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full bg-gray-900 border-2 border-gray-700 text-white p-3 rounded-lg focus:outline-none focus:border-amber-400 transition-colors"
                            aria-label="Username"
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            placeholder="Contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-gray-900 border-2 border-gray-700 text-white p-3 rounded-lg focus:outline-none focus:border-amber-400 transition-colors"
                            aria-label="Password"
                        />
                    </div>
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    <div>
                        <button
                            type="submit"
                            className="w-full bg-amber-400 text-black font-bold py-3 px-6 rounded-lg hover:bg-amber-500 transition-colors"
                        >
                            Entrar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginScreen;
