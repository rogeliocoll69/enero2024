import { configureStore } from "@reduxjs/toolkit";

// Aquí agregarás los reducers más adelante
export const store = configureStore({
  reducer: {}, // Asegúrate de añadir tus reducers aquí
});

// Tipos para TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;