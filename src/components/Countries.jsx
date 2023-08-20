import React, { useEffect, useState } from 'react'
import { useGetCountriesQuery } from '../services/countriesApi';

const Countries = () => {
    const { data: countries } = useGetCountriesQuery();

    return (
        <>
            <div className="container my-12 mx-auto px-4 md:px-12">
                <div className="flex flex-wrap -mx-1 lg:-mx-4">

                    {
                        countries?.map(country => (
                            <div className=' my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4 flex flex-wrap m-2  h-[50%] justify-center items-center mt-2' key={country.idd}>
                                <div className='flex flex-col'>

                                    <div className='border-2 p-2 rounded-md'>
                                        <img src={country.flags?.png} alt={country.name} />
                                    </div>
                                    <div className='border-2 p-2 rounded-md'>
                                        <h1>{country.name.common}</h1>
                                        <h1>{country.capital}</h1>
                                        <h1>{country.region}</h1>
                                        <h1>{country.subregion}</h1>
                                        <h1>{country.population}</h1>
                                        <h1>{country.maps?.googleMaps}</h1>
                                    </div>
                                </div>

                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Countries


