import { configureStore } from "@reduxjs/toolkit";
import { userReducer, loginAccount , logOutAccount } from "./slices/userSlice";
import { clientsReducer , addClient , removeClient } from "./slices/clientsSlice";

const store = configureStore({
    reducer : {
        user: userReducer,
        clients : clientsReducer
    }
});


export {
    store,
    loginAccount,
    logOutAccount,
    addClient,
    removeClient
}