import { connect } from "react-redux";
import Steps from '../Steps/Steps';
import { addTransaction } from "../../redux/transactionHistoryRedux";
import { getAmount, 
        getFrom,
        getTo,
        getResult,
        getData,
        changeValid,
        getRequestError} from '../../redux/moneyActionsSelectors';
import { loadMoneyRequest } from "../../redux/thunks";

const mapStateToProps = (state) => ({
    fromRedux: getFrom(state),
    toRedux: getTo(state),
    amountRedux: getAmount(state),
    resultRedux: getResult(state),
    dataRedux: getData(state),
    errorRequest: getRequestError(state)
})

const mapDispatchToProps = dispatch => ({
    addTransaction: operationObj => dispatch(addTransaction(operationObj)),
    changeValid: (value) => dispatch(changeValid(value)),
    loadMoneyRequest: (from, to, amount) => dispatch(loadMoneyRequest(from, to, amount))
})

export default connect(mapStateToProps, mapDispatchToProps)(Steps);