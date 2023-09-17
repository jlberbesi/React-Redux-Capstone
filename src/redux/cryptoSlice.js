import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCryptos = createAsyncThunk('crypto/fetchCryptos', async () => {
  const response = await axios.get('https://api.coinstats.app/public/v1/coins');
  return response.data.coins;
});

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState: { coins: [], status: 'idle', error: null },
  reducers: {
    setCoins: (state, action) => {
      state.coins = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCryptos.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCryptos.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.coins = action.payload;
      })
      .addCase(fetchCryptos.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setCoins } = cryptoSlice.actions;
export default cryptoSlice.reducer;
