import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: { counter: 0},
    reducers: {
        increment(state, action) { 
            state.counter++;
        },
        decrement(state, action) {
            state.counter--;
         },
        addBy(state, action) {
            state.counter += action.payload;
         },
    },
});
export const actions = counterSlice.actions;
const store = configureStore({
    reducer: counterSlice.reducer
});
export default store;



































// import { createStore } from 'redux';

//STORE a globalized state. holds all the data/state for the application

//ACTION describes what you want to do: it is a function that returns an object
    // const increment = () => {
    //     return {
    //         type: 'INCREMENT'
    //     }
    // }

//REDUCER describes how your actions transform the state into the next state
//the ACTION will be called, reducer will check which action you did and base on action will modify the store

// const counter = (state = 0, action) => {
//     switch(action.type){
//         case "INCREMENT":
//             return state + 1;
//         case "DECREMENT":
//             return state -1;
//     }
// };

// let store = createStore(counter);

//Display it in the console
// store.subscribe(() => console.log(store.getState()));

//DISPATCH the way to execute the action
// store.dispatch(increment());






// const reducerFn = (state = { counter: 0 }, action) => {
//     //SYNCHRONOUS Function
//     // should not mutate the original state

//     if(action.type==="INCREMENT") {
//         return {counter: state.counter+ 1};
//     }
//     if(action.type==="DECREMENT") {
//         return {counter: state.counter- 1};
//     }
//     if(action.type==="ADD") {
//         return {counter: state.counter + action.payload};
//     }
//     return state;
// };

// const store = createStore(reducerFn);
// export default store;