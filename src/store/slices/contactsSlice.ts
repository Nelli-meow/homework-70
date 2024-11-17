import {createSlice} from '@reduxjs/toolkit';

interface contactsState {
  phoneNumbers: string;
}

const initialState: contactsState = {
  phoneNumbers: '',
}

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {

  },
});

export const contactsReducer = contactsSlice.reducer;