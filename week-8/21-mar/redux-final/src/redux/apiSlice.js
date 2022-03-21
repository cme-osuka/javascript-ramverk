import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Inte en nödvändig del av applikationen/redux,
// utan endast när vi testade RTK Query 
// som är ett inbyggt verktyg i RTK
// Läs mer om det på:
// https://redux-toolkit.js.org/rtk-query/overview

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: (name) => `pokemon/${name}`
    })
  })
})

export const { useGetPokemonByNameQuery } = pokemonApi;