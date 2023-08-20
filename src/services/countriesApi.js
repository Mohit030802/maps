import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const createRequest = (url) => ({url})

export const countriesApi = createApi({
    reducerPath: 'countriesApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://restcountries.com/v3.1'}),
    endpoints:(builder)=>({
        getCountries:builder.query({
            query:()=>createRequest('/all')
        })
    })
})

export const {useGetCountriesQuery}=countriesApi;