import React, { useState } from 'react';

const Signup = ({ onClose, onSignup }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNo, setphoneNo] = useState('');
  const [dob, setdob] = useState('');
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
    onSignup();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center ">
      <form onSubmit={handleSubmit} className="p-10 bg-white rounded shadow-md transform transition-all scale-105">
        <h2 className="mb-4 text-2xl font-bold">Signup</h2>
        {error && <p className="mb-4 text-red-500">{error}</p>}
        <input
          type="name"
          placeholder="Enter Full Name"         
          className="mb-2 p-2 border rounded flex"
        />
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mb-2 p-2 border rounded flex "
        />
        <input
          type="number"
          placeholder="Mobile no."
          value={email}
          onChange={(e) => setphoneNo(+91)}
          required
          className="mb-2 p-2 border rounded flex"
        />
        <input
          type="date"
          placeholder="Mobile no."
          value={email}
          onChange={(e) => setdob()}
          
          className="mb-2 p-2 border rounded flex"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="mb-8 p-2 border rounded"
        />
        <div className="flex justify-between">
          <button type="button" onClick={onClose} className="p-2 bg-gray-500 text-white border rounded-xl">Cancel</button>
          <button type="submit" className="p-2 bg-green-500 text-white border rounded-xl">Signup</button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
