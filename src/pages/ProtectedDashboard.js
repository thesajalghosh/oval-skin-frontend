import { useState } from 'react';

const DASHBOARD_PASSWORD = 'BomLee@123'; // static password

export default function ProtectedDashboard({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [showPassword, setShowPassword] = useState(false); // new state

  const handleLogin = () => {
    if (passwordInput === DASHBOARD_PASSWORD) {
      setIsAuthenticated(true);
    } else {
      alert('Incorrect password!');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <div className="bg-white shadow-md rounded-lg p-6 w-80">
          <h2 className="text-lg font-bold mb-4">Enter Dashboard Password</h2>
          
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              className="border rounded px-3 py-2 w-full mb-4 pr-12"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-2 text-sm text-blue-500"
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>

          <button
            onClick={handleLogin}
            className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600"
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  return children;
}
