import React, { useState, useEffect } from 'react';
import useAppStore from '../state/store';

const ItemList = () => {
  const { items, fetchItems, updateItem, deleteItem } = useAppStore();
  const [editItemId, setEditItemId] = useState(null); 
  const [editName, setEditName] = useState('');
  const [editStatus, setEditStatus] = useState('');

  useEffect(() => {
    fetchItems(); 
  }, [fetchItems]);

  const handleEdit = (item) => {
    setEditItemId(item.id);
    setEditName(item.name);
    setEditStatus(item.status);
  };

  const handleUpdate = () => {
    updateItem(editItemId, { name: editName, status: editStatus });
    setEditItemId(null);
    setEditName('');
    setEditStatus('');
  };

  return (
    <div className="bg-background p-6 rounded-lg shadow-md space-y-4">
      {items.map((item) => (
        <div key={item.id} className="bg-card p-4 border border-border rounded-lg shadow hover:shadow-lg">
          {editItemId === item.id ? (
            <div className="space-y-2">
              <input type="text" value={editName} onChange={(e) => setEditName(e.target.value)} placeholder="Name" className="w-full px-4 py-2 border border-border rounded-md focus:ring-primary focus:outline-none" />
              <input type="status" value={editStatus} onChange={(e) => setEditStatus(e.target.value)} placeholder="Status" className="w-full px-4 py-2 border border-border rounded-md focus:ring-primary focus:outline-none" />
              <div className="flex gap-2">
                <button onClick={handleUpdate} className="px-4 py-2 bg-primary text-white rounded-md hover:bg-opacity-90">
                  Save
                </button>
                <button onClick={() => setEditItemId(null)} className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600">
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div>
              <h3 className="text-lg font-semibold text-textPrimary">{item.name}</h3>
              <p className="text-sm text-textSecondary">{item.status}</p>
              <div className="mt-4 flex gap-2">
                <button onClick={() => handleEdit(item)} className="px-4 py-2 bg-primary text-white rounded-md hover:bg-opacity-90">
                  Update
                </button>
                <button onClick={() => deleteItem(item.id)} className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
                  Delete
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ItemList;
