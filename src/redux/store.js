import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import thunk from 'redux-thunk'
import transactionHistoryRedux from '../redux/transactionHistoryRedux';
import selectMoneyRedux from '../redux/selectMoneyRedux';

const initialState = {
    selectMoney:{
        from: 'EUR',
        to: 'CHF',
        amount: '',
        result: '',
        data: '',
        isValid: true,
        request: {
            error: null,
            success: false, 
            pending: false,
        },
    },
    transactionHistory: [],
  }

const reducers = {
    transactionHistory: transactionHistoryRedux,
    selectMoney: selectMoneyRedux,
}

const storeReducer = combineReducers(reducers);

const store = createStore (
    storeReducer,
    initialState,
    applyMiddleware(thunk)
)

export default store;



