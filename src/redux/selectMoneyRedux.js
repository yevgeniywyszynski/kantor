
import { LOAD_MONEY, 
        START_REQUEST, 
        END_REQUEST,
        ERROR_REQUEST,
        CHANGE_FROM,
        CHANGE_TO,
        CHANGE_AMOUNT,
        CHANGE_RESULT,
        CHANGE_VALID } from './moneyActionsSelectors';

export default function reducer(statePart=[], action={}) {
    switch(action.type) {
        case LOAD_MONEY:
            return {...statePart, ...action.payload}
        case START_REQUEST:
            return {...statePart, request: {pending: true, error: null, success: false}}
        case END_REQUEST: 
            return {...statePart, request: {pending: false, error: null, success: true}}
        case ERROR_REQUEST: 
            return {...statePart, request: { pending: false, error: action.error, success: false}}
        case CHANGE_FROM :
            return {...statePart, from: action.payload}
        case CHANGE_TO :
            return {...statePart, to: action.payload}
        case CHANGE_AMOUNT :
            return {...statePart, amount: action.payload}
        case CHANGE_RESULT:
            return {...statePart, result: action.payload}
        case CHANGE_VALID:
            return {...statePart, isValid: action.payload}
    }
  return statePart
}