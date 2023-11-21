import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3dc85da322msh644e4697ea1f90cp1339a0jsn29d1d318bd4c',
		'X-RapidAPI-Host': 'newsi-api.p.rapidapi.com'
	}
};


const baseUrl = `https://newsi-api.p.rapidapi.com/api/category?category=world&language=en&country=us&sort=top&page=1&limit=50`;

export const fetchNews = createAsyncThunk('cryptoNewsApi/fetchNews', async () => {
    const res = await fetch(baseUrl, options)
    const data = await res.json()
    return data
});

const cryptoNewsApi = createSlice({
    name: "cryptoNewsApi",
    initialState: {
        data: [],
        status: '',
    },

    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchNews.pending, (state) => {
            state.status = "Loading";
        })
        .addCase(fetchNews.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.data = action.payload;
        })
    }
})

export default cryptoNewsApi.reducer