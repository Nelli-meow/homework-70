import {createSlice} from '@reduxjs/toolkit';

interface contactsState {
  phoneContacts: string;
}

const initialState: contactsState = {
  phoneContacts: '',
}

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {

  },
});

export const contactsReducer = contactsSlice.reducer;