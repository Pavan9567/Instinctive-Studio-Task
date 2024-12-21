import { useState } from "react";
import useStore from "../state/store";

const AddItemForm = () => {
    const [newItem, setNewItem] = useState({ name: '', status: '' });
    const addItem = useStore((state) => state.addItem);

    const handleItemSubmit = async (e) => {
        e.preventDefault();

        if (!newItem.name || !newItem.status) {
            console.error('Name or status is missing.');
            return;
        }

        try {
            await addItem(newItem);
            setNewItem({name: '', status: '' });
        } catch (error) {
            console.log('Error adding user:', error);
        }
    };

    return (
        <form onSubmit={handleItemSubmit} className="mb-6">
            <input type="text" placeholder="Item Name" value={newItem.name} onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                className="p-2 border rounded mr-2"
            />
            <input type="text" placeholder="Item Status" value={newItem.status} onChange={(e) => setNewItem({ ...newItem, status: e.target.value })}
                className="p-2 border rounded mr-2"
            />
            <button type="submit" className="p-2 bg-blue-600 text-white rounded">Add Item</button>
        </form>
    );
};

export default AddItemForm;