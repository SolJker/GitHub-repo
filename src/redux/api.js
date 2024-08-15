import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


export const api = createApi({
    reducerPath: 'GitHubApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://api.github.com/'}),
    endpoints: (builder) => ({
        getItems: builder.query({
            query: () => `search/repositories?q=blazor`,
        })
    }),
})





export const {useGetItemsQuery} = api
export default api.reducer;
