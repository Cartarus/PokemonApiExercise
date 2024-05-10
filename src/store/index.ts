import { Middleware, configureStore } from '@reduxjs/toolkit'
import counterSlice from './counter/counterSlice'
import pokemonReducer from './pokemons/pokemons'
import { useDispatch, useSelector } from 'react-redux'
import { localStorageMiddleware } from './middlewares/localStorage--middleware'

export const store = configureStore({
  reducer: {
    counter:counterSlice,
    pokemons:pokemonReducer
  },
  // middleware:(getDefaultMiddleware) => getDefaultMiddleware()
  // .concat( localStorageMiddleware as Middleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()