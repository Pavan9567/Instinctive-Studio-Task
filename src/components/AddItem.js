import React, { useState } from 'react';
import useAppStore from '../state/store';

const AddItem = () => {
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');
  const addItem = useAppStore((state) => state.addItem);

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem({ name, status });
    setName('');
    setStatus('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-card p-6 rounded-lg shadow-md border border-border space-y-4">
      <h2 className="text-lg font-semibold text-textPrimary">Add Item</h2>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Item Name" className="w-full px-4 py-2 border border-border rounded-md focus:ring-primary focus:outline-none" />
      <input type="text" value={status} onChange={(e) => setStatus(e.target.value)} placeholder="Status" className="w-full px-4 py-2 border border-border rounded-md focus:ring-primary focus:outline-none" />
      <button className="w-full px-4 py-2 bg-primary text-white rounded-md hover:bg-opacity-90">
        Add Item
      </button>
    </form>
  );
};

export default AddItem;
