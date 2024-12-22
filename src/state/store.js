import { create } from 'zustand';
import { supabase } from '../supabaseClient';

// Zustand store
const useAppStore = create((set) => ({
  users: [],
  items: [],

  // Fetch users
  fetchUsers: async () => {
    const { data, error } = await supabase.from('users').select('*');
    if (error) console.error('Error fetching users:', error);
    else set({ users: data });
  },

  // Add user
  addUser: async (user) => {
    const { data, error } = await supabase.from('users').insert(user).select('*');
    if (error) console.error('Error adding user:', error);
    else set((state) => ({ users: [...state.users, ...data] }));
  },

  // Update user
  updateUser: async (id, updatedUser) => {
    const { error } = await supabase.from('users').update(updatedUser).eq('id', id);
    if (error) console.error('Error updating user:', error);
    else {
      set((state) => ({
        users: state.users.map((user) =>
          user.id === id ? { ...user, ...updatedUser } : user
        ),
      }));
    }
  },

  // Delete user
  deleteUser: async (id) => {
    const { error } = await supabase.from('users').delete().eq('id', id);
    if (error) console.error('Error deleting user:', error);
    else {
      set((state) => ({
        users: state.users.filter((user) => user.id !== id),
      }));
    }
  },

  // Fetch items
  fetchItems: async () => {
    const { data, error } = await supabase.from('items').select('*');
    if (error) console.error('Error fetching items:', error);
    else set({ items: data });
  },

  // Add item
  addItem: async (item) => {
    const { data, error } = await supabase.from('items').insert(item).select('*');
    if (error) console.error('Error adding item:', error);
    else set((state) => ({ items: [...state.items, ...data] }));
  },

  // Update item
  updateItem: async (id, updatedItem) => {
    const { error } = await supabase.from('items').update(updatedItem).eq('id', id);
    if (error) console.error('Error updating item:', error);
    else {
      set((state) => ({
        items: state.items.map((item) =>
          item.id === id ? { ...item, ...updatedItem } : item
        ),
      }));
    }
  },

  // Delete item
  deleteItem: async (id) => {
    const { error } = await supabase.from('items').delete().eq('id', id);
    if (error) console.error('Error deleting item:', error);
    else {
      set((state) => ({
        items: state.items.filter((item) => item.id !== id),
      }));
    }
  },
}));

export default useAppStore;