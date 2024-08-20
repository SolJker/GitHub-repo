import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


export const api = createApi({
    reducerPath: 'GitHubApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://api.github.com/'}),
    endpoints: (builder) => ({
        getItems: builder.query({
            query: (arg) => {
                return{
                    params: {arg},
                    url: `search/repositories?q=${arg}`,
                }
            }
        })
    }),
})





export const {useLazyGetItemsQuery} = api
export default api.reducer;
