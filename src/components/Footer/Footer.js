import React from 'react'
import styles from '../Footer/Footer.module.scss';
import { MY_LINK } from '../../settings/settings';

const Footer = () => {
    return(
        <div className={styles.footerWrapper}>
            <p className={styles.footer}> © created by <a className={styles.linkAuthor} href={MY_LINK}> <span className={styles.author}>ywyszynski</span></a></p>
        </div>
    )
}

export default Footer;