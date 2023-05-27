import { createSlice } from "@reduxjs/toolkit";

const clientSlice = createSlice({
    name: 'clients',
    initialState: [{
        points: 200,
        name: 'leo',
        password: 'barcelona',
        email: 'leoMessi@gmail.com',
        phoneNumber: '+201204450819',
        address: 'france',
        national_id: '01566214852624',
        birth_date: '24/6/1900',
        client_id: '1',
        accounts: [
            {
                id: 1,
                accountNumber: 555555555,
                accountType:'Savings',
                cards: [
                  { id: 1, cardNumber: 'CARD-111', type: 'Credit Card', limit: 5000 , validThru: '12/25', cvc: 123},
                  { id: 2, cardNumber: 'CARD-222', type: 'Debit Card', balance: 1500, validThru: '11/25', cvc: 223 },
                  { id: 3, cardNumber: 'CARD-333', type: 'Prepaid Card', balance: 500, validThru: '10/25', cvc: 333 },
                ],
                creditScore: 650,
              },
              {
                id: 2,
                accountNumber: 123456789,
                accountType:'Savings',
                cards: [
                  
                ],
                creditScore: 720,
              },
              {
                id: 3,
                accountNumber: 987654321,
                accountType:'Savings',
                cards: [
                  { id: 1, cardNumber: 'CARD-666', type: 'Credit Card', limit: 10000, validThru: '12/29', cvc: 222 },
                  { id: 2, cardNumber: 'CARD-777', type: 'Credit Card', limit: 5000, validThru: '12/23', cvc: 111 },
                  { id: 3, cardNumber: 'CARD-888', type: 'Debit Card', balance: 500, validThru: '12/24', cvc: 123 },
                  { id: 4, cardNumber: 'CARD-999', type: 'Prepaid Card', balance: 200, validThru: '12/27', cvc: 123 },
                ],
                creditScore: 550,
              },
            ],
          
        transactions: [{
            id: 1,
            dateTime: "2023-05-20 09:30:15",
            accountNumber: 123456789,
            transactionType: "Deposit",
            amount: -500.00,
            balance: 2500.00,
        },
        {
            id: 2,
            dateTime: "2023-05-21 14:45:10",
            accountNumber: 123456789,
            transactionType: "Withdrawal",
            amount: -200.00,
            balance: 2300.00,
        },
        {
            id: 3,
            dateTime: "2023-05-22 11:20:05",
            accountNumber: 987654321,
            transactionType: "Deposit",
            amount: -1000.00,
            balance: 3000.00,
        },
        {
            id: 4,
            dateTime: "2023-05-22 16:55:30",
            accountNumber: 987654321,
            transactionType: "Transfer",
            amount: 500.00,
            balance: 2500.00,
        },
        {
            id: 5,
            dateTime: "2023-05-23 08:15:50",
            accountNumber: 555555555,
            transactionType: "Withdrawal",
            amount: 100.00,
            balance: 400.00,
        }],
        loans: {
            personalLoan: [{
                id: 1,
                date: "2023-05-10",
                accountNumber: 123456789,
                loanType: "Personal",
                amount: 5000.00,
                status: "Paid",
                paymentDue: "2023-06-01",
                duration: '24 months',
                rate: 4
            },
            {
                id: 2,
                date: "2023-05-15",
                accountNumber: 987654321,
                loanType: "Personal",
                amount: 200000.00,
                status: "Active",
                paymentDue: "2023-06-01",
                duration: '12 months',
                rate: 3
            },
            {
                id: 3,
                date: "2023-05-20",
                accountNumber: 555555555,
                loanType: "Personal",
                amount: 25000.00,
                status: "Active",
                paymentDue: "2023-06-01",
                duration: '36 months',
                rate: 12
            }],
            carLoan: []
        },
        bills: [
            {
                id: 1,
                amount: 100.0,
                dueDate: '2023-06-15',
                payee: 'gas',
                additionalInfo: 'Gas bill for the month of June',
            },
            {
                id: 2,
                amount: 50.0,
                dueDate: '2023-06-25',
                payee: 'telephone',
                additionalInfo: 'Telephone bill for the month of June',
            },
            {
                id: 3,
                amount: 80.0,
                dueDate: '2023-06-10',
                payee: 'electricity',
                additionalInfo: 'Electricity bill for the month of June',
            },
            {
                id: 4,
                amount: 30.0,
                dueDate: '2023-06-20',
                payee: 'water',
                additionalInfo: 'Water bill for the month of June',
            },
        ],
        creditCards: [],
        notifications: {
            bankAnnouncements: [],
            issueResolution: [],
            loanApplication: [],
            creditCardApplication: [],
            debitCardApplication: [],
            prepaidCardApplication: [],
            updates: []
        },
        applications: {
            loanApplication: {
                personalLoanApplication:[],
                carLoanApplication: []
            },
            creditCardApplication: [],
            debitCardApplication: [],
            prepaidCardApplication: []
        }
    }],
    reducers: {
        addClient(state, action) {
            // Assumption : the object is in the payload
            state.push(action.payload);
        },
        removeClient(state, action) {
            state = state.filter((client) => {
                return client.national_id !== action.payload.national_id
            });
        },
        payBill(state, action) {
            state[0].bills = state[0].bills.filter((bill) => {
                return bill.id !== action.payload.bill.id
            })
            const transaction = {
                id: state[0].transactions.length + 1,
                dateTime: new Date().toISOString().slice(0, 19).replace('T', ' '),
                accountNumber: action.payload.accountNumber,
                transactionType: "Bill",
                amount: -1*action.payload.bill.amount,
                balance: 3000.00,
            }
            state[0].transactions.push(transaction);
        }
    }
});

export const { addClient, removeClient, payBill } = clientSlice.actions;
export const clientsReducer = clientSlice.reducer