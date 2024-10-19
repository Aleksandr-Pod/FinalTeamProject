import { createSlice } from '@reduxjs/toolkit';
import transactionsOperations from './transactionOperations';

const initialState = {
  transactions: [],
  totalBalance: 0,
  currentId: '',
  isLoading: false,
  error: null,
  showModal: false,
  modalInitials: {
    isIncome: false,
    category: '',
    amount: '',
    date: new Date().toISOString().slice(0, 10),
    comment: ' ',
  },
  operation: 'addTransaction',
};

export const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    resetTransactions(state) {
      state.transactions = [];
      state.error = null;
    },
    setTransactions(state, { payload }) {
      console.log('payload in set transactions', payload);
      state.transactions = payload;
      state.totalBalance = payload.user.balance;
      state.error = null;
      state.isLoading = false;
    },
    setCurrentId(state, { payload }) {
      state.currentId = payload;
    },
    setShowModal(state, { payload }) {
      state.showModal = payload;
    },
    setModalInitials(state, { payload }) {
      state.modalInitials = payload;
    },
    resetModalInitials(state) {
      state.modalInitials = initialState.modalInitials;
    },
    setOperation(state, { payload }) {
      state.operation = payload;
    },
  },
  extraReducers: {
    [transactionsOperations.getTransactions.pending]: state => {
      state.error = null;
      state.isLoading = true;
    },
    [transactionsOperations.getTransactions.fulfilled]: (
      state,
      { payload },
    ) => {
      state.transactions = payload.allTransactions;
      state.totalBalance = payload.totalBalance;
      state.isLoading = false;
    },
    [transactionsOperations.getTransactions.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.message;
    },

    [transactionsOperations.addTransaction.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [transactionsOperations.addTransaction.fulfilled]: (state, action) => {
      state.totalBalance = action.payload.balance;
      state.operation = 'addTransaction';
      state.modalInitials = initialState.modalInitials;
      state.showModal = false;
      state.isLoading = false;
    },
    [transactionsOperations.addTransaction.rejected]: (state, action) => {
      state.error = action.payload.response.data.message;
      state.isLoading = false;
    },

    [transactionsOperations.editTransaction.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [transactionsOperations.editTransaction.fulfilled]: (state, action) => {
      state.operation = 'addTransaction';
      state.modalInitials = initialState.modalInitials;
      state.showModal = false;
      state.isLoading = false;
    },
    [transactionsOperations.editTransaction.rejected]: (state, action) => {
      state.error = action.payload.response.data.message;
      state.isLoading = false;
    },

    [transactionsOperations.deleteTransaction.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [transactionsOperations.deleteTransaction.fulfilled]: state => {
      state.isLoading = false;
    },
    [transactionsOperations.deleteTransaction.rejected]: (
      state,
      { payload },
    ) => {
      state.isLoading = true;
      state.error = payload.response.data.message;
    },
  },
});

export const {
  resetTransactions,
  setTransactions,
  setBalance,
  setCurrentId,
  setShowModal,
  setModalInitials,
  resetModalInitials,
  setOperation,
} = transactionsSlice.actions;
