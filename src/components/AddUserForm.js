import { useState } from "react";
import useStore from "../state/store";

const AddUserForm = () => {
    const [newUser, setNewUser] = useState({ name: '', email: '' });
    const addUser = useStore((state) => state.addUser);

    const handleUserSubmit = async (e) => {
        e.preventDefault();
        if (!newUser.name || !newUser.email){
            console.error('Name or email is missing.');
            return;
        }

        try {
            await addUser(newUser);
            setNewUser({name: '', email: '' });
        } catch (error) {
            console.error('Error adding user:', error);
        }
    };
    return (
        <form onSubmit={handleUserSubmit} className="mb-6">
            <input type="text" placeholder="Name" value={newUser.name} onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
             className="p-2 border rounded mr-2"/>
            <input type="email" placeholder="Email" value={newUser.email} onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
             className="p-2 border rounded mr-2"/>
            <button type="submit" className="p-2 bg-green-600 text-white rounded">Add User</button>
        </form>
    );
};

export default AddUserForm;