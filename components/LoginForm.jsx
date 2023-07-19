import { useState } from 'react';
import { EyeSlashIcon } from './icons/EyeSlashIcon';
import { EyeIcon } from './icons/EyeIcon';

export function LoginForm() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);


    const handleSubmit = (event) => {
        event.preventDefault();
        setIsLoading(true);

        // para funcionar o loading do botão
        setTimeout(() => {

            setIsLoading(false);
        }, 2000);
    };

    return (
        <form className="flex flex-col items-center" onSubmit={handleSubmit}>
            <div className="w-full mb-2">
                <label htmlFor="email" className="text-gray-50 text-xs font-bold flex items-start">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    className="w-full h-9 rounded-md bg-transparent border-cyan-500 border-4 text-gray-50 text-xs px-3 py-2 mt-1 focus:outline-none focus:ring-0"
                    placeholder='Insira seu email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="w-full mb-2 relative">
                <label htmlFor="password" className="text-gray-50 text-xs font-bold flex items-start">
                    Senha
                </label>
                <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    className="w-full h-9 rounded-md bg-transparent border-cyan-500 border-4 text-gray-50 text-xs px-3 py-2 mt-1 focus:outline-none focus:ring-0"
                    placeholder='Insira sua senha'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {showPassword ? (
                    <div className="w-5 h-5 text-gray-500 absolute top-[67%] right-3 transform -translate-y-1/2 cursor-pointer"
                        onClick={() => setShowPassword(false)}>
                        <EyeSlashIcon />
                    </div>

                ) : (
                    <div className="w-5 h-5 text-gray-50 absolute top-[67%] right-3 transform -translate-y-1/2 cursor-pointer"
                        onClick={() => setShowPassword(true)}>
                        <EyeIcon />
                    </div>

                )}
            </div>
            {!isLoading ? (
                <button
                    type="submit"
                    className="w-2/3 h-9 bg-cyan-500 text-white text-xs text-center px-4 py-2 rounded-md hover:bg-cyan-400"
                >
                    Entrar
                </button>
            ) : (

                <button
                    type="button"
                    className="w-2/3 h-9 bg-cyan-500 text-white px-4 py-2 rounded-md hover:bg-cyan-400 flex justify-center items-center"
                >
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 text-xs border-gray-50"></div>
                </button>
            )}

            <button
                type="button"
                className="w-2/3 h-9 bg-cyan-500 text-white text-xs text-center px-4 py-2 rounded-md hover:bg-cyan-400 mt-3"
            >
                Esqueci minha senha
            </button>
        </form>
    );
}
