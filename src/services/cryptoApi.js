
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const options = {
	method: 'GET',
    params: {
        referenceCurrencyUuid: 'yhjMzLPhuIDl',
        timePeriod: '24h',
        'tiers[0]': '1',
        orderBy: 'marketCap',
        orderDirection: 'desc',
        limit: '50',
        offset: '0'
      },
	headers: {
		'X-RapidAPI-Key': '3dc85da322msh644e4697ea1f90cp1339a0jsn29d1d318bd4c',
		'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
	}
};

const baseUrl = `https://coinranking1.p.rapidapi.com/coins`;


export const fetchData = createAsyncThunk("cryptoApi/fetchData", async () => {
    const response =  await fetch(baseUrl, options);
    const data = await response.json();
    return data
});


const cryptoApi = createSlice({
    name: "cryptoApi",
    initialState: {
        data: [],
        status: '',   
    },
    reducers: {},
        extraReducers: (builder) => {
        builder
        .addCase(fetchData.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchData.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.data = action.payload;
        })
    }
})

export default cryptoApi.reducer


