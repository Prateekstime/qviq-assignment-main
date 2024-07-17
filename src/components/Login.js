import React, { useState } from 'react';

const Login = ({ onClose, onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

    if (!emailRegex.test(email)) {
      setError('Invalid email format');
      return;
    }

    if (!passwordRegex.test(password)) {
      setError('Password must be between 6-20 characters and include at least one numeric digit, one uppercase and one lowercase letter');
      return;
    }

    setError('');
    onLogin();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <form onSubmit={handleSubmit} className="p-10 bg-white rounded shadow-md transform transition-all scale-105">
        <h2 className="mb-4 text-2xl font-bold">Login</h2>
        {error && <p className="mb-4 text-red-500">{error}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mb-4 p-2 border rounded flex"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="mb-4 p-2 border rounded"
        />
        <div className="flex justify-between">
          <button type="button" onClick={onClose} className="p-2 px-5 bg-gray-500 text-white rounded-xl">Cancel</button>
          <button type="submit" className="p-2 px-5 bg-blue-500 text-white rounded-xl">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
