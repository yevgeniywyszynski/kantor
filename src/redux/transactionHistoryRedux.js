export const getHistory = ({transactionHistory}) => transactionHistory;


const reducerName = 'transaction';
const createActionName = name => `app/${reducerName}/${name}`;

const ADD_TRANSACTION = createActionName('ADD_TRANSACTION');
export const addTransaction = payload => ({payload, type: ADD_TRANSACTION})

export default function reducer(statePart=[], action={}) {
    switch(action.type) {
        case ADD_TRANSACTION:
            return  [...statePart, action.payload] 
    }

  return statePart
}