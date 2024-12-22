import React, { useState, useEffect } from 'react';
import useAppStore from '../state/store';

const UserList = () => {
  const { users, fetchUsers, updateUser, deleteUser } = useAppStore();
  const [editUserId, setEditUserId] = useState(null);
  const [editName, setEditName] = useState('');
  const [editEmail, setEditEmail] = useState('');

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const handleEdit = (user) => {
    setEditUserId(user.id);
    setEditName(user.name);
    setEditEmail(user.email);
  };

  const handleUpdate = () => {
    updateUser(editUserId, { name: editName, email: editEmail });
    setEditUserId(null);
    setEditName('');
    setEditEmail('');
  };

  return (
    <div className="bg-background p-6 rounded-lg shadow-md space-y-4">
      {users.map((user) => (
        <div key={user.id} className="bg-card p-4 border border-border rounded-lg shadow hover:shadow-lg">
          {editUserId === user.id ? (
            <div className="space-y-2">
              <input type="text" value={editName} onChange={(e) => setEditName(e.target.value)} placeholder="Name" className="w-full px-4 py-2 border border-border rounded-md focus:ring-primary focus:outline-none" />
              <input type="email" value={editEmail} onChange={(e) => setEditEmail(e.target.value)} placeholder="Email" className="w-full px-4 py-2 border border-border rounded-md focus:ring-primary focus:outline-none" />
              <div className="flex gap-2">
                <button onClick={handleUpdate} className="px-4 py-2 bg-primary text-white rounded-md hover:bg-opacity-90">
                  Save
                </button>
                <button onClick={() => setEditUserId(null)} className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600">
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div>
              <h3 className="text-lg font-semibold text-textPrimary">{user.name}</h3>
              <p className="text-sm text-textSecondary">{user.email}</p>
              <div className="mt-4 flex gap-2">
                <button onClick={() => handleEdit(user)} className="px-4 py-2 bg-primary text-white rounded-md hover:bg-opacity-90">
                  Update
                </button>
                <button onClick={() => deleteUser(user.id)} className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
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

export default UserList;
