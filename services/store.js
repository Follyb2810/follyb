import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { cryptoApi } from './cryptoApi';
import { cryptoNewsApi } from './cryptoNewsApi';

const store = configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cryptoApi.middleware,
                                   cryptoNewsApi.middleware,
                                       
                                   ),
});

export default store;


// store.js
// import { configureStore } from '@reduxjs/toolkit';
// import { setupListeners } from '@reduxjs/toolkit/query/react';
// import { api } from './api';

// export const store = configureStore({
//   reducer: {
//     [api.reducerPath]: api.reducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(api.middleware),
// });

// setupListeners(store.dispatch);


// api.js
// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const api = createApi({
//   reducerPath: 'api',
//   baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
//   endpoints: (builder) => ({
//     // GET request example
//     getPosts: builder.query({
//       query: () => 'posts',
//     }),
//     // POST request example
//     createPost: builder.mutation({
//       query: (newPost) => ({
//         url: 'posts',
//         method: 'POST',
//         body: newPost,
//       }),
//     }),
//   }),
// });

// export const { useGetPostsQuery, useCreatePostMutation } = api;


// Posts.js
// import { useGetPostsQuery, useCreatePostMutation } from './api';

// const Posts = () => {
//   const { data: posts, isLoading, isError } = useGetPostsQuery();
//   const [createPost] = useCreatePostMutation();

//   const handleCreatePost = async (newPost) => {
//     try {
//       await createPost(newPost);
//       // Handle success
//     } catch (error) {
//       // Handle error
//     }
//   };

//   // Render posts and create post form

//   return (
//     // JSX code
//   );
// };

// export default Posts;
