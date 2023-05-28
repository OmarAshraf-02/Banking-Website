import {createSlice} from '@reduxjs/toolkit';

const adminSlice = createSlice({
    name: 'admin',
    initialState: {
        name: '',
        password: 'admin' ,
        email: 'admin',
        phoneNumber: '',
        address: '',
        national_id: '',
        birth_date: '',
        id: '',
        userType: ''
    },
    reducers: {
        loginAccount(state , action){
            // Assumption action.payload will have the object of the user that will be logged in after authentication
            state.name = action.payload.name;
            state.password = action.payload.password;
            state.email = action.payload.email;
            state.phoneNumber = action.payload.phoneNumber;
            state.address = action.payload.address;
            state.national_id = action.payload.national_id;
            state.birth_date = action.payload.birth_date;
            state.id = action.payload.id;
            state.userType = action.payload.userType
        },
        logOutAccount(state , action){
            // Assumption action.payload will be empty
            state.name = "";
            state.password = "";
            state.email = "";
            state.phoneNumber = "";
            state.address = "";
            state.national_id = "";
            state.birth_date = "";
            state.id = "";
            state.userType = ""
        }
    }
});

export const {loginAccount , logOutAccount} = adminSlice.actions;
export const adminReducer = adminSlice.reducer;