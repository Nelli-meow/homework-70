import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IContact } from '../../types';


interface contactsState {
  contacts: IContact[];
}

const initialState: contactsState = {
  contacts: [],
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<IContact>) => {
      state.contacts.push(action.payload);
    },
    editContact: (state, action: PayloadAction<IContact>) => {
      const index = state.contacts.findIndex((c) => c.id === action.payload.id);
      if (index !== -1) {
        state.contacts[index] = action.payload;
      }
    },
    deleteContact: (state, action: PayloadAction<string>) => {
      state.contacts = state.contacts.filter((c) => c.id !== action.payload);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { addContact, editContact, deleteContact } = contactsSlice.actions;
