import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './Contacts/Contacts-slice';
import { filterReducer } from './Filter/Filter-slice';

export const store = configureStore({
    reducer: {
      contacts: contactsReducer,
      filter: filterReducer,
    },
  });
