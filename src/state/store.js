import { create } from 'zustand';
import { supabase } from '../supabaseClient';

const useStore = create((set) => ({
    users: [],
    fetchUsers: async () => {
        const { data, error } = await supabase.from('users').select('*');
        if (error) {
            console.error('Error fetching users:', error);
        } else {
            set({ users: data});
        }
    },
    addUser: async (newUser) => {
        const { data, error } = await supabase.from('users').insert(newUser);
        if (error) {
            console.error('Error adding user:', error);
        } else {
            set((state) => ({ users: [...state.users, data[0]] }));
        }
    },

    items: [],
    fetchItems: async () => {
        const { data, error } = await supabase.from('items').select('*');
        if (error) {
            console.error('Error fetching items:', error);
        } else {
            set({ items: data });
        }
    },
    addItem: async (newItem) => {
        const { data, error } = await supabase.from('items').insert(newItem);
        if (error) {
            console.error('Error adding item:', error);
        } else {
            set((state) => ({ items: [...state.items, data[0]] }));
        }
    },
}));

export default useStore;