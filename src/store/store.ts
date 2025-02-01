import { configureStore } from '@reduxjs/toolkit';
import randomNumberReducer from './randomNumberSlice';
import { useDispatch, useSelector } from 'react-redux';

export const store = configureStore({
  reducer: {
    randomNumber: randomNumberReducer,
  },
});

// Tipos personalizados para Redux
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Exporta useAppDispatch
export const useAppDispatch = () => useDispatch<AppDispatch>(); 