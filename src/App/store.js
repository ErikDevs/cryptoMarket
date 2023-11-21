import { configureStore } from "@reduxjs/toolkit";
import  cryptoApiReducer from "../services/cryptoApi";
import  cryptoNewsApiReducer from "../services/cryptoNew";

export default configureStore({
    reducer: {

        cryptoApi: cryptoApiReducer,
        cryptoNewsApi: cryptoNewsApiReducer

    },
})