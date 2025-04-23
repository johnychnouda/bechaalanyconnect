import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the cart item interface
interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
    // Add other properties as needed
}

export interface CartState {
    cartItems: CartItem[]
}

const initialState: CartState = {
    // properties with default values
    cartItems: []
}

// Create the slice of the cart 
export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // List of reducer actions
        addToCart: (state, action: PayloadAction<CartItem>) => {
            const existingItem = state.cartItems.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += action.payload.quantity || 1;
            } else {
                state.cartItems.push({
                    ...action.payload,
                    quantity: action.payload.quantity || 1
                });
            }
        },
        removeFromCart: (state, action: PayloadAction<string>) => {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
        },
        updateQuantity: (state, action: PayloadAction<{id: string, quantity: number}>) => {
            const item = state.cartItems.find(item => item.id === action.payload.id);
            if (item) {
                item.quantity = action.payload.quantity;
            }
        },
        clearCart: (state) => {
            state.cartItems = [];
        }
    }
});

// Export actions
export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;

// Export reducer
export default cartSlice.reducer;
