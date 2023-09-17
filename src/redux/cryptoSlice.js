import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define una acción asincrónica para buscar criptomonedas
export const fetchCryptos = createAsyncThunk('crypto/fetchCryptos', async () => {
  const response = await axios.get('https://api.coinstats.app/public/v1/coins');
  return response.data.coins;
});

// Crea un slice de Redux con el nombre 'crypto'
const cryptoSlice = createSlice({
  name: 'crypto',
  initialState: { coins: [], status: 'idle', error: null },
  reducers: {
    // Configura el valor de 'coins' directamente
    setCoins: (state, action) => {
      state.coins = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCryptos.pending, (state) => {
        // Actualiza 'status' en 'loading' durante la solicitud pendiente
        state.status = 'loading';
      })
      .addCase(fetchCryptos.fulfilled, (state, action) => {
        // Actualiza 'status' en 'succeeded' y asigna 'action.payload' a 'coins' en éxito
        state.status = 'succeeded';
        state.coins = action.payload;
      })
      .addCase(fetchCryptos.rejected, (state, action) => {
        // Actualiza 'status' en 'failed' y asigna el mensaje de error
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

// Exporta las acciones generadas automáticamente y el reducer
export const { setCoins } = cryptoSlice.actions;
export default cryptoSlice.reducer;
