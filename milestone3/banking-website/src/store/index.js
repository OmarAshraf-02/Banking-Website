import { configureStore } from "@reduxjs/toolkit";
import { userReducer, loginAccount , logOutAccount } from "./slices/userSlice";
import { clientsReducer , addClient , removeClient, payBill, closeAccount, payTransfer } from "./slices/clientsSlice";
import { bankerReducer } from "./slices/bankerSlice";
import { adminReducer } from "./slices/adminSlice";

const store = configureStore({
    reducer : {
        user: userReducer,
        clients : clientsReducer,
        banker: bankerReducer,
        admin: adminReducer
    }
});


export {
    store,
    loginAccount,
    logOutAccount,
    addClient,
    removeClient,
    payBill,
    payTransfer,
    closeAccount
}