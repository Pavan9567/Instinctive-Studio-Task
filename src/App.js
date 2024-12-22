import React from 'react';
import Header from './components/Header';
import AddUser from './components/AddUser';
import UserList from './components/UserList';
import AddItem from './components/AddItem';
import ItemList from './components/ItemList';

const App = () => {
  return (
    <div className="min-h-screen bg-background font-sans p-6">
      <div className="container-fluid mx-auto">
        <Header />
        <div className="grid grid-cols-2 gap-8 mt-2">
          <div className="space-y-6">
            <AddUser />
            <UserList />
          </div>
          <div className="space-y-6">
            <AddItem />
            <ItemList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
