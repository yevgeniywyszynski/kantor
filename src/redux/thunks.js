import axios from 'axios';
import { startRequest, loadMoney, endRequest, errorRequest } from "./moneyActionsSelectors";
import { CURRENCY_API_KEY } from '../settings/keys';
export const loadMoneyRequest = (from, to, amount) => {
    return async dispatch => {
       dispatch(startRequest());
        let isoDateString = new Date().toISOString().split("T")[0];
        let infoObj = {
            from: from,
            to: to,
            amount: amount,
            data: isoDateString,
        }

        try{
            let allMoney = await axios.get('https://currency-conversion-and-exchange-rates.p.rapidapi.com/convert',
                {
                headers: {
                    'X-RapidAPI-Key': CURRENCY_API_KEY,
                    'X-RapidAPI-Host': 'currency-conversion-and-exchange-rates.p.rapidapi.com'
                },
                params: infoObj,
                }
            )
            const result = parseFloat(allMoney.data.result).toFixed(2);
            dispatch(loadMoney({result: result, data: infoObj.data}))
            dispatch(endRequest())
        }  catch(e) {
            console.log(e)
            dispatch(errorRequest({name: 'ERROR_REQUEST', error: 'could not fetch data'}));
        }
    }
}