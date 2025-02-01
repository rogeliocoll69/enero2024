import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';

// Hook personalizado para el dispatch
export const useAppDispatch: () => AppDispatch = useDispatch;

// Hook personalizado para el selector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;