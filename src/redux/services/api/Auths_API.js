import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const AuthsAPI = createApi({
    reducerPath: "authsAPI",

    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.naiims.ng/api/v1/EFCCAgent",
    }),

    tagTypes: ["User"],

    endpoints: (builder) => ({
        loginUser: builder.mutation({
            query: (requestData) => ({
                url: "/Login",
                method: "POST",
                body: requestData
            }),
            async onQueryStarted(args, { queryFulfilled }) {
                try {
                    await queryFulfilled;
                    // const { data: responseData } = await queryFulfilled;
                    // console.log("RESPONSE DATA::: ", responseData);
                } catch (error) {
                    console.log(error);
                }
            }
        }),
    }),
});


export const {
    useLoginUserMutation,
} = AuthsAPI;

export default AuthsAPI;