import { configureStore } from '@reduxjs/toolkit';
import axios from 'axios';
import * as api from './config';
import { controlsReducer } from './features/controls/controls-slice';
import { countriesReducer } from './features/countries/countries-slice';
import { detailsReducer } from './features/details/details-slice';
import { themeReducer } from './features/theme/theme-slice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    controls: controlsReducer,
    countries: countriesReducer,
    details: detailsReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          client: axios,
          api,
        },
      },
      serializableCheck: false,
    }),
});
