import React, { useEffect, useState } from 'react';
import styles from './Steps.module.scss';
import TransactionHistory from '../TransactionHistory/TransactionHistoryContainer';
import SelectMoney from '../SelectMoney/SelectMoneyContainer';
import InputResult from '../InputResult/InputResultContainer';
import { ERROR_MESSAGE } from '../../settings/settings';

const Steps = ({addTransaction, 
                fromRedux, 
                toRedux, 
                amountRedux, 
                loadMoneyRequest, 
                resultRedux, 
                dataRedux, 
                changeValid, 
                errorRequest }) => {
 
    const [showHistory, setShowHistory] = useState(false)

    const currencyChange = () => {
        if(amountRedux == ''|| isNaN(amountRedux)){
            changeValid(false)
        } else {
            changeValid(true)
            const fetchData = async () => {
                loadMoneyRequest(fromRedux, toRedux, amountRedux)
            }
            fetchData()     
        }
    }   

    useEffect(()=>{
        let infoObj = {
                from: fromRedux,
                to: toRedux,
                amount: amountRedux,
                data: dataRedux,
                result: resultRedux
            }
            if(resultRedux){
                addTransaction(infoObj);
            }
    }, [resultRedux])

    useEffect(() => {
        if(errorRequest){
            alert(ERROR_MESSAGE)
        }
    }, [errorRequest])

    return(
        <div className={styles.convertorWrapper}>
            <div className={styles.stepWrapper}>
                <h2 className={styles.title}>Konwerter walut</h2>
                <div className={styles.calculatorWrapper}>
                    <SelectMoney />
                    <InputResult/>
                </div>
                <div className={styles.btnWrapper}>
                    <button 
                        className={styles.btnHistory} 
                        onClick={() => 
                            setShowHistory(!showHistory)}>
                                {showHistory? "Ukryj Historie" : "Pokaz historie"}
                    </button>
                    <button 
                        className={styles.btnConvert} 
                        onClick={() => 
                            currencyChange()}type="button" >
                                Konwertuj
                    </button>
                </div>
                {
                showHistory ? <TransactionHistory /> : null
                }
            </div>
        </div>
    )
}

export default Steps;