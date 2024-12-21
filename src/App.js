import { useEffect } from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import useStore from "./state/store";
import UserCard from "./components/UserCard";
import AddUserForm from "./components/AddUserForm";
import AddItemForm from "./components/AddItemForm";

function App() {
  const { users, fetchUsers, items, fetchItems } = useStore();

  useEffect(() => {
    fetchUsers();
    fetchItems();
  }, [fetchUsers, fetchItems]);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="container mx-auto p-6">
        <section className="mb-12">
        <h1 className="text-3xl font-bold mb-6">User List</h1>
        <AddUserForm />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
        </section>
        <section className="mb-12">
        <h1 className="text-3xl font-bold mb-6">Item List</h1>
        <AddItemForm />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {items.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
        </section>
      </div>
    </div>
  );
}

export default App;
