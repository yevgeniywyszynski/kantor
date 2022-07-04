import React from "react";
import styles from '../SelectMoney/SelectMoney.module.scss';
import { FaExchangeAlt} from "react-icons/fa";

const SelectMoney = ({changeFrom, changeTo, changeResult}) => {
    return(
    <div className={styles.selectWrapper}>
        <div className={styles.optionMoneyWrapper}>
            <p className={styles.titleSelect}>Przelicz z</p>
            <select className={styles.moneyType} id="currency" 
            onChange={(e => {
                changeFrom(e.target.value)
                changeResult('')
                }
                )}
            >
                <option value="EUR">Euro EUR</option>
                <option value="USD">Dollar USD</option>
                <option value="GBP">Funt brytyjski GBR</option>
                <option value="CHF">Frank szwajcarski CHF</option>
                <option value="PLN">Złoty PLN</option>
            </select>
        </div>
        <div className={styles.arrowMoney}>
            <FaExchangeAlt className={styles.iconArrow} />
        </div>
        <div className={styles.optionMoneyWrapper}>
            <p className={styles.titleSelect}>Przelicz na</p>
            <select className={styles.moneyType} id="currency" 
            onChange={(e => {
                changeTo(e.target.value)
                changeResult('')
                }
            )}
            >
                <option value="CHF">Frank szwajcarski CHF</option>
                <option value="GBP">Funt brytyjski GBR</option>
                <option value="USD">Dollar USD</option>
                <option value="EUR">Euro EUR</option>
                <option value="PLN">Złoty PLN</option>
            </select>
        </div>
    </div>
    )
}

export default SelectMoney;