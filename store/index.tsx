import { configureStore, combineReducers } from '@reduxjs/toolkit'
import cartReducer from './cartSlice'

// Create the root reducer
const rootReducer = combineReducers({
    // List of your reducers here
    cart: cartReducer,
    // Add other reducers as needed
})

// Create the store
export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});

// Export types
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch