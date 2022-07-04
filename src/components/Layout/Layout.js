import React from 'react';
import {Outlet} from 'react-router-dom'
import styles from '../Layout/Layout.module.scss';
import Footer from '../Footer/Footer';


const Layout = () => {
    return(
        <div>
            <Outlet />
            <Footer />
        </div>
    )
}
export default Layout;