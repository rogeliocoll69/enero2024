import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface RandomNumberState {
  value: number | null;
  loading: boolean;
  error: string | null; // Añade la propiedad error al tipo del estado
}

const initialState: RandomNumberState = {
  value: null,
  loading: false,
  error: null, // Inicializa error a null
};

export const fetchRandomNumber = createAsyncThunk<number, void, { rejectValue: string }>( // Tipado para manejo de errores
  "randomNumber/fetchRandomNumber",
  async (_, { rejectWithValue }) => { // Usa rejectWithValue para manejar errores
    try {
      const response = await fetch("https://random.api/endpoint");
      if (!response.ok) { // Manejo de errores de red
        const errorData = await response.json(); // Intenta obtener mensaje de error del backend
        return rejectWithValue(errorData?.message || `Error ${response.status}: ${response.statusText}`); // Rechaza con mensaje de error
      }
      const data = await response.json();
      return data.number;
    } catch (error: any) {
      return rejectWithValue(error.message || "An error occurred"); // Rechaza con mensaje de error genérico
    }
  }
);

const randomNumberSlice = createSlice({
  name: "randomNumber",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRandomNumber.pending, (state) => {
        state.loading = true;
        state.error = null; // Limpia errores anteriores al iniciar la carga
      })
      .addCase(fetchRandomNumber.fulfilled, (state, action) => {
        state.value = action.payload;
        state.loading = false;
        state.error = null; // Limpia errores al obtener un valor exitoso
      })
      .addCase(fetchRandomNumber.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Unknown error"; // Guarda el mensaje de error en el estado
      });
  },
});

export default randomNumberSlice.reducer;