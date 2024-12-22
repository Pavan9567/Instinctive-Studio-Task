import React, { useState } from 'react';
import useAppStore from '../state/store';

const AddUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const addUser = useAppStore((state) => state.addUser);

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser({ name, email });
    setName('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-card p-6 rounded-lg shadow-md border border-border space-y-4">
      <h2 className="text-lg font-semibold text-textPrimary">Add User</h2>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" className="w-full px-4 py-2 border border-border rounded-md focus:ring-primary focus:outline-none" />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="w-full px-4 py-2 border border-border rounded-md focus:ring-primary focus:outline-none" />
      <button className="w-full px-4 py-2 bg-primary text-white rounded-md hover:bg-opacity-90">
        Add User
      </button>
    </form>
  );
};

export default AddUser;
