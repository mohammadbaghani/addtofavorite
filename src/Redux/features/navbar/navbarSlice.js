import { createSlice } from '@reduxjs/toolkit';
function fetchFromLocalStorage() {
    let value = localStorage.getItem("value");
    let va = localStorage.getItem("value");
    if (va) {
        return JSON.parse(va);
    }
    else {
        return [];
    }

  
}

function storeInLocalStorage(data) {
    localStorage.setItem("value", JSON.stringify(data));
}
function storeInLocalStorageva(data) {
    localStorage.setItem("va", JSON.stringify(data));
}
const initialState = {
    value: [],
    va: [],
}

export const navbarSlice = createSlice({
    name: "navbar",
    initialState,
    reducers: {
        add: (state, action) => {
            const existingProduct = state.value.find(eachProduct => eachProduct.id === action.payload.id);


            if (existingProduct) {
                existingProduct.quantity += 1;

            }

            state.value = [...state.value, { ...action.payload, quantity: 1 }];


            const uniqueProducts = state.value.filter((product, index, self) =>
                index === self.findIndex(p => p.id === product.id)
            );

            state.value = uniqueProducts;
            storeInLocalStorage(state.value);
        

        },
        addtofav: (state, action) => {
            const existingProduct = state.va.find(eachProduct => eachProduct.id === action.payload.id);

            state.va = [...state.va, { ...action.payload, quantity: 1 }];


            const uniqueProducts = state.va.filter((product, index, self) =>
                index === self.findIndex(p => p.id === product.id)
            );

            state.va = uniqueProducts;
            storeInLocalStorageva(state.va);
          
          

        },


        remove: (state, action) => {
            const index = state.value.findIndex(product => product.id === action.payload);


            if (index !== -1) {
                state.value.splice(index, 1);

                storeInLocalStorage(state.value);
            
            }
          
           
        },
        removeva: (state, action) => {
            const index = state.va.findIndex(product => product.id === action.payload);


            if (index !== -1) {
                state.va.splice(index, 1);

                storeInLocalStorageva(state.va);
                

            }
        },
        removeOne: (state, action) => {
            const index = state.value.findIndex(product => product.id === action.payload);

            if (index !== -1) {
                if (state.value[index].quantity > 1) {

                    state.value[index].quantity -= 1;

                    storeInLocalStorage(state.value);

                }
            }
        }
    },
});

export const { add, remove, removeOne, addtofav, removeva ,includefav} = navbarSlice.actions;

export default navbarSlice.reducer;
