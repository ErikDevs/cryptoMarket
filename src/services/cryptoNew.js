import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const options = {
	method: 'POST',
	headers: {
		'X-RapidAPI-Key': '3dc85da322msh644e4697ea1f90cp1339a0jsn29d1d318bd4c',
		'X-RapidAPI-Host': 'newsnow.p.rapidapi.com'
	},
	body: {
		query: 'AI',
		page: 1,
		time_bounded: true,
		from_date: '01/02/2023',
		to_date: '05/06/2023',
		location: '',
		category: 'cryptocurrency',
		source: ''
	}
};


const baseUrl = 'https://newsnow.p.rapidapi.com/newsv2';

export const fetchNews = createAsyncThunk('cryptoNewsApi/fetchNews', async () => {
    const res = await fetch(baseUrl, options)
    const data = await res.json()
    return data
});

const cryptoNewsApi = createSlice({
    name: "cryptoNewsApi",
    initialState: {
        data: []
    },

    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchNews.fulfilled, (state, action) => {
            state.data = action.payload;
        })
    }
})

export default cryptoNewsApi.reducer