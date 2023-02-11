import { Link } from "react-router-dom"
import { Outlet } from "react-router-dom"
import { Fragment } from "react"

import './navigation.styles.scss'
const Navigation = () => {
    return (
        <Fragment>
            <div className='navigation-container'>
                <Link className='logo-container' to='/'>LOGO</Link>
                <div className='nav-links'>
                    <Link className='nav-link' to='/shop'>SHOP</Link>
                    <Link className='nav-link' to='/sign-in'>SIGN IN</Link>

                </div>
            </div>
            <Outlet />
        </Fragment>

    )
}

export default Navigation