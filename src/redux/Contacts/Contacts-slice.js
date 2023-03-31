import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, removeContact } from '../Operation/operations';

const handlePending = state => {
    state.isLoading = true;
  };
  
  const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  };
  

  const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
      contacts: [],
      isLoading: false,
      error: null,
    },
    extraReducers: {
      [fetchContacts.pending]: handlePending,
      [fetchContacts.fulfilled](state, action) {
        state.isLoading = false;
        state.error = null;
        state.contacts = action.payload;
      },
  
      [fetchContacts.rejected]: handleRejected,
      [addContact.pending]: handlePending,
      [addContact.fulfilled](state, { payload }) {
        state.isLoading = false;
        state.error = null;
        state.contacts.push(payload);
        console.log('payload', payload);
      },
  
      [addContact.rejected]: handleRejected,
      [removeContact.pending]: handlePending,
      [removeContact.fulfilled](state, action) {
        state.isLoading = false;
        state.error = null;
        const index = state.contacts.findIndex(
          contact => contact.id === action.payload.id
        );
        state.contacts.splice(index, 1);
      },
  
      [removeContact.rejected]: handleRejected,
    },
  });
  export const contactsReducer = contactsSlice.reducer;
