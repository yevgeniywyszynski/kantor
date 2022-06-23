export const getFrom = ({selectMoney}) => selectMoney.from;
export const getTo = ({selectMoney}) => selectMoney.to;
export const getAmount = ({selectMoney}) => selectMoney.amount;
export const getResult = ({selectMoney}) => selectMoney.result;
export const getValid = ({selectMoney}) => selectMoney.isValid;
export const getData = ({selectMoney}) => selectMoney.data;
export const getRequestError = ({selectMoney}) => selectMoney.request.error;

const reducerName = 'selectMoney';
const createActionName = name => `app/${reducerName}/${name}`;


export const START_REQUEST = createActionName('START_REQUEST');
export const END_REQUEST = createActionName('END_REQUEST');
export const ERROR_REQUEST = createActionName('ERROR_REQUEST');
export const LOAD_MONEY = createActionName('LOAD_MONEY');

export const startRequest = () => ({type: START_REQUEST});
export const endRequest = () => ({type: END_REQUEST});
export const errorRequest = payload => ({payload, type: ERROR_REQUEST});
export const loadMoney = payload => ({payload, type: LOAD_MONEY});


export const CHANGE_FROM = createActionName('CHANGE_FROM');
export const changeFrom = payload => ({payload, type: CHANGE_FROM})

export const CHANGE_TO= createActionName('CHANGE_TO');
export const changeTo = payload => ({payload, type: CHANGE_TO})

export const CHANGE_AMOUNT = createActionName('CHANGE_AMOUNT');
export const changeAmount = payload => ({payload, type: CHANGE_AMOUNT})

export const CHANGE_RESULT = createActionName('CHANGE_RESULT');
export const changeResult = payload => ({payload, type: CHANGE_RESULT})

export const CHANGE_VALID = createActionName('CHANGE_VALID');
export const changeValid = payload => ({payload, type: CHANGE_VALID})
