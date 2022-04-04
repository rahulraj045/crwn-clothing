import { Fragment, useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';


import { ReactComponent as Logo } from '../../assets/crown.svg';

import { UserContext } from '../../contexts/user.context';

import { signOutUser } from '../../firebase/firebase.utils';

import './header.styles.scss';

const Header = () => {

    const { currentUser } = useContext(UserContext);
    // console.log(currentUser)
    
    return (
        <Fragment>
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo' /> 
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>
                    SHOP
                </Link>
                <Link className='option' to='/contact'>
                    CONTACT
                </Link>
                {
                    currentUser ?
                    <span className='option' onClick={ signOutUser } >
                        SIGN OUT
                    </span>
                    :
                    <Link className='option' to='/signin'>
                        SIGN IN
                    </Link>
                }
            </div>
        </div>
        <Outlet />
    </Fragment> 
    )  
};

export default Header;