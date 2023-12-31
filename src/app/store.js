import { configureStore } from "@reduxjs/toolkit";

import { countriesApi } from "../services/countriesApi";

export default configureStore({
    reducer:{
        [countriesApi.reducerPath]:countriesApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
        countriesApi.middleware
       
    ),
})