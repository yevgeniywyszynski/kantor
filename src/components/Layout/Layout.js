import React from 'react';
import {Outlet} from 'react-router-dom'
import styles from '../Layout/Layout.module.scss';
import {IMG_LOGO} from '../../settings/settings';


const Layout = () => {
    return(
        <div >
            <Outlet />
            <img 
                className={styles.imgLogo} 
                src={IMG_LOGO} />
        </div>
    )
}
export default Layout;