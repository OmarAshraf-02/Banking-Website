import { createSlice } from "@reduxjs/toolkit";

const clientSlice = createSlice({
    name: 'clients',
    initialState: [{
        points: 200,
        name: 'leo',
        password: 'client',
        email: 'client',
        phoneNumber: '+201204450819',
        address: 'france',
        national_id: '01566214852624',
        birth_date: '24/6/1900',
        client_id: '1',
        accounts: [
            {
                id: 1,
                status: 'Active',
                accountNumber: 555555555,
                accountType:'Savings',
                card: { id: 2, cardNumber: 'CARD-222', type: 'Debit Card', validThru: '11/25', cvc: 223 },
                balance: 0,
              },
              {
                id: 2,
                status: 'Active',
                accountNumber: 123456789,
                accountType:'Savings',
                card:{},
                balance: 200
              },
              {
                id: 3,
                accountNumber: 987654321,
                status: 'Active',
                accountType:'Savings',
                balance: 200,
                card: { id: 1, cardNumber: 'CARD-999', type: 'Prepaid Card', validThru: '12/27', cvc: 123 },
              },
            ],
          
        transactions: [{
            id: 1,
            dateTime: "2023-05-20 09:30:15",
            accountNumber: 123456789,
            transactionType: "Deposit",
            amount: +500.00,
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
            amount: +1000.00,
            balance: 3000.00,
        },
        {
            id: 4,
            dateTime: "2023-05-22 16:55:30",
            accountNumber: 987654321,
            transactionType: "Transfer",
            amount: -500.00,
            balance: 2500.00,
        },
        {
            id: 5,
            dateTime: "2023-05-23 08:15:50",
            accountNumber: 555555555,
            transactionType: "Withdrawal",
            amount: -100.00,
            balance: 400.00,
        }],
        loans: {
            personalLoans: [{
                id: 1,
                date: "2023-05-10",
                accountNumber: 123456789,
                loanType: "Personal",
                amount: 5000.00,
                status: "Paid",
                paymentDue: "2023-06-01",
                duration: 24,
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
                duration: 12,
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
                duration: 36,
                rate: 12,
                
            }],
            carLoans: [
                {
                  id: 1,
                  make: 'Toyota',
                  model: 'Corolla',
                  year: 2002,
                  employment: 'Employed',
                  duration: 24,
                  amount: 20000,
                  annualIncome: 50000,
                  loanType: "Car",
                  status:'Active',
                  date: "2023-05-15",
                  accountNumber: 987654321,
                  paymentDue: "2023-06-01",
                  rate: 4,
                  // Add other valid attributes here
                },
                {
                  id: 2,
                  make: 'Honda',
                  model: 'Civic',
                  year: 2002,
                  employment: 'Self Employed',
                  duration: 36,
                  amount: 30000,
                  annualIncome: 60000,
                  loanType: "Car",
                  status:'Paid',
                  date: "2023-05-15",
                  accountNumber: 555555555,
                  paymentDue: "2023-06-01",
                  rate: 12,
                  // Add other valid attributes here
                },
                // Add more car loan objects as needed
              ]
              
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
        creditCards: [
            {
              id: 1,
              cardNumber: 'CARD-1111',
              limit: 5000,
              validThru: '12/25',
              cvc: 123,
              points: 200,
              creditScore: 550,
              // Add other valid attributes here
            },
            {
              id: 2,
              cardNumber: 'CARD-2222',
              limit: 3000,
              validThru: '11/24',
              cvc: 456,
              points: 300,
              creditScore: 990,
              // Add other valid attributes here
            },
            // Add more credit card objects as needed
          ],
        notifications: {
            bankAnnouncements: [
                {
                  id: 1,
                  message: 'Important announcement regarding system maintenance on June 1st.',
                  date: '2023-05-27',
                  severity: 'warning'
                  // Add other valid attributes here
                },
                {
                  id: 2,
                  message: 'Upcoming changes to the fee structure. Please review the updated terms.',
                  date: '2023-05-26',
                  severity: 'warning'
                  // Add other valid attributes here
                },
                // Add more bank announcement objects as needed
              ],
              issueResolution: [
                {
                  id: 1,
                  message: 'Your reported issue has been resolved. Please verify and provide feedback.',
                  date: '2023-05-25',
                  severity: 'success'
                  // Add other valid attributes here
                },
                {
                  id: 2,
                  message: 'We are actively working on resolving the reported technical issue. Thank you for your patience.',
                  date: '2023-05-24',
                  severity: 'info'
                  // Add other valid attributes here
                },
                // Add more issue resolution objects as needed
              ],
              loanApplication: [
                {
                  id: 1,
                  message: 'Your personal loan application has been received and is currently being processed.',
                  date: '2023-05-23',
                  severity: 'info'
                  // Add other valid attributes here
                },
                {
                  id: 2,
                  message: 'Congratulations! Your car loan application has been approved. Please review the terms and provide required documents.',
                  date: '2023-05-22',
                  severity: 'success'
                  // Add other valid attributes here
                },
                // Add more loan application objects as needed
              ],
              creditCardApplication: [
                {
                  id: 1,
                  message: 'We have received your credit card application. Our team will review it shortly.',
                  date: '2023-05-21',
                  severity: 'info'
                  // Add other valid attributes here
                },
                {
                  id: 2,
                  message: 'Your credit card application has been approved! You will receive your new card within 7 business days.',
                  date: '2023-05-20',
                  severity: 'success'
                  // Add other valid attributes here
                },
                // Add more credit card application objects as needed
              ],
              debitCardApplication: [
                {
                  id: 1,
                  message: 'Your debit card application has been submitted. We will notify you once it is processed.',
                  date: '2023-05-19',
                  severity: 'info'
                  // Add other valid attributes here
                },
                {
                  id: 2,
                  message: 'Your debit card application has been rejected.',
                  date: '2023-05-18',
                  severity: 'error'
                  // Add other valid attributes here
                },
                // Add more debit card application objects as needed
              ],
              prepaidCardApplication: [
                {
                  id: 1,
                  message: 'Your prepaid card application is under review. We will inform you of the decision soon.',
                  date: '2023-05-17',
                  severity: 'info'
                  // Add other valid attributes here
                },
                {
                  id: 2,
                  message: 'Your prepaid card application has been approved. You can start using your card immediately.',
                  date: '2023-05-16',
                  severity: 'success'
                  // Add other valid attributes here
                },
                // Add more prepaid card application objects as needed
              ],
              updates: [
                {
                  id: 1,
                  message: 'We have updated our mobile banking app. Please download the latest version from your app store.',
                  date: '2023-05-15',
                  severity: 'info'
                  // Add other valid attributes here
                },
                {
                  id: 2,
                  message: 'New security measures have been implemented to protect your account. Please ensure your contact information is up to date.',
                  date: '2023-05-14',
                  severity: 'info'
                  // Add other valid attributes here
                },
                // Add more update objects as needed
              ],
        },
        applications: {
            loanApplication: {
                personalLoanApplication: [
                    {
                      id: 1,
                      employment: 'Employed',
                      loanTerm: 24,
                      loanAmount: 10000.00,
                      annualIncome: 50000.00,
                      purposeOfLoan: 'Home renovation',
                      status: 'Pending'
                      // Add other valid attributes here
                    },
                    {
                      id: 2,
                      employment: 'Self Employed',
                      loanTerm: 36,
                      loanAmount: 20000.00,
                      annualIncome: 80000.00,
                      purposeOfLoan: 'Debt consolidation',
                      status: 'Accepted'
                      // Add other valid attributes here
                    },
                    // Add more personal loan application objects as needed
                  ],
              carLoanApplication: [
                {
                  id: 1,
                  make: 'Ford',
                  model: 'Mustang',
                  employment: 'Unemployed',
                  loanTerm: 12,
                  loanAmount: 15000,
                  annualIncome: 40000,
                  status: 'Rejected'
                  // Add other valid attributes here
                },
                {
                  id: 2,
                  make: 'Chevrolet',
                  model: 'Camaro',
                  employment: 'Employed',
                  loanTerm: 48,
                  loanAmount: 25000,
                  annualIncome: 70000,
                  status: 'Pending'
                  // Add other valid attributes here
                },
                // Add more car loan application objects as needed
              ],
            },
            creditCardApplication: [
                {
                  id: 1,
                  nationalIdNumber: '1234567890',
                  cardholderName: 'John Doe',
                  city: 'New York',
                  address: '123 Main Street',
                  creditLimit: 5000.00,
                  annualIncome: 60000.00,
                  occupation: 'Software Engineer',
                  employer: 'XYZ Company',
                  homeownerStatus: 'Renter',
                  maritalStatus: 'Single',
                  status: 'Accepted'
                  // Add other valid attributes here
                },
                {
                  id: 2,
                  nationalIdNumber: '0987654321',
                  cardholderName: 'Jane Smith',
                  city: 'Los Angeles',
                  address: '456 Elm Street',
                  creditLimit: 10000.00,
                  annualIncome: 80000.00,
                  occupation: 'Marketing Manager',
                  employer: 'ABC Corporation',
                  homeownerStatus: 'Homeowner',
                  maritalStatus: 'Married',
                  status: 'Pending'
                  // Add other valid attributes here
                },
                // Add more credit card application objects as needed
              ],
            debitCardApplication: [
              {
                id: 1,
                nationalIdNumber: '1234567890',
                cardholderName: 'John Doe',
                city: 'New York',
                address: '123 Main St',
                status: 'Rejected'
                // Add other valid attributes here
              },
              // Add more debit card application objects as needed
            ],
            prepaidCardApplication: [
              {
                id: 1,
                nationalIdNumber: '9876543210',
                cardholderName: 'Jane Smith',
                city: 'Los Angeles',
                address: '456 Elm St',
                balanceLimit: 500,
                startingBalance: 100,
                status: 'Accepted'
                // Add other valid attributes here
              },
              // Add more prepaid card application objects as needed
            ],
          },
        reports: {
            technicalIssues: [
              {
                id: 1,
                dateSent: '2023-05-25',
                details: 'Issue description',
                // Add other valid attributes here
              },
              {
                id: 2,
                dateSent: '2023-05-26',
                details: 'Another issue description',
                // Add other valid attributes here
              },
              // Add more technical issue objects as needed
            ],
            theftLossDamage: [
              {
                id: 1,
                dateSent: '2023-05-25',
                type: 'Theft',
                details: 'Incident details',
                // Add other valid attributes here
              },
              {
                id: 2,
                dateSent: '2023-05-26',
                type: 'Loss',
                details: 'Another incident details',
                // Add other valid attributes here
              },
              // Add more theft/loss/damage objects as needed
            ],
          },          
        transfers: {
            domestic: [
              {
                id: 1,
                senderAccountNumber: 555555555,
                recipientAccountNumber: 123456789,
                recipientBankName: 'ABC Bank',
                amount: 1000.00,
                purpose: 'Payment for services',
                dateSent: '2023-05-25',
                // Add other valid attributes here
              },
              {
                id: 2,
                senderAccountNumber: 987654321,
                recipientAccountNumber: 555555555,
                recipientBankName: 'XYZ Bank',
                amount: 500.00,
                purpose: 'Reimbursement',
                dateSent: '2023-05-25',
                // Add other valid attributes here
              },
              // Add more domestic transfer objects as needed
            ],
            internal: [
              {
                id: 1,
                senderAccountNumber: 555555555,
                recipientAccountNumber: 987654321,
                amount: 2000.00,
                purpose: 'Transfer to another account',
                dateSent: '2023-05-25',
                // Add other valid attributes here
              },
              {
                id: 2,
                senderAccountNumber: 123456789,
                recipientAccountNumber: 555555555,
                amount: 1500.00,
                purpose: 'Shared expenses',
                dateSent: '2023-05-25',
                // Add other valid attributes here
              },
              // Add more internal transfer objects as needed
            ],
            international: [
              {
                id: 1,
                senderAccountNumber: 555555555,
                recipientAccountNumber: 'GB12BARC12345678901234',
                recipientBankName: 'Barclays Bank',
                amount: 5000.00,
                purpose: 'International payment',
                currency: 'USD',
                recipientCity: 'London',
                recipientSwiftBIC: 'BARCGB22',
                dateSent: '2023-05-25',
                // Add other valid attributes here
              },
              {
                id: 2,
                senderAccountNumber: 123456789,
                recipientAccountNumber: 'DE12COBA98765432109876',
                recipientBankName: 'Commerzbank',
                amount: 3000.00,
                purpose: 'Overseas purchase',
                currency: 'EUR',
                recipientCity: 'Berlin',
                recipientSwiftBIC: 'COBADEFF',
                dateSent: '2023-05-25',
                // Add other valid attributes here
              },
              // Add more international transfer objects as needed
            ],
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
            const account = state[0].accounts.find((account)=>{
              return account.accountNumber===action.payload.accountNumber
            })
            account.balance = account.balance - action.payload.bill.amount;

            const transaction = {
                id: state[0].transactions.length + 1,
                dateTime: new Date().toISOString().slice(0, 19).replace('T', ' '),
                accountNumber: action.payload.accountNumber,
                transactionType: "Bill",
                amount: -1*action.payload.bill.amount,
                balance: account.balance,
            }
            state[0].transactions.push(transaction);
        },
        payTransfer(state, action) {
          const account = state[0].accounts.find((account)=>{
            return account.accountNumber===action.payload.accountNumber
          })
          account.balance = account.balance - action.payload.transfer.amount;
            const transaction = {
                id: state[0].transactions.length + 1,
                dateTime: new Date().toISOString().slice(0, 19).replace('T', ' '),
                accountNumber: action.payload.accountNumber,
                transactionType: "Transfer",
                amount: -1*action.payload.transfer.amount,
                balance: account.balance,
            }
            state[0].transactions.push(transaction);
        },
        closeAccount(state,action){
          const account = state[0].accounts.find((account)=>{
            return account.accountNumber===action.payload.accountNumber
          });
          account.status = 'Inactive';
        }
    }
});

export const { addClient, removeClient, payBill, payTransfer, closeAccount } = clientSlice.actions;
export const clientsReducer = clientSlice.reducer