import { createSlice } from "@reduxjs/toolkit";

const clientSlice = createSlice({
    name:'clients',
    initialState: [{
        name: 'leo',
        password: 'barcelona' ,
        email: 'leoMessi@gmail.com',
        phoneNumber: '+201204450819',
        address: 'france',
        national_id: '01566214852624',
        birth_date: '24/6/1900',
        client_id: '1'
    }],
    reducers: {
        addClient(state, action){
            // Assumption : the object is in the payload
            state.push(action.payload);
        },
        removeClient(state , action){
            state = state.filter((client) => {
                return client.national_id !== action.payload.national_id
            });
        }
    }
});

export const {addClient , removeClient} = clientSlice.actions;
export const clientsReducer = clientSlice.reducer