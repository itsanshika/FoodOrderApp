import React,{Fragment} from 'react';

import HeaderButton from './HeaderButton';
import imgHeader from '../../assets/imgHeader.jpg';
import classes from './Header.module.css';
import Cart from '../Cart/Cart';

function Header(props)
{

return <Fragment>
<header className={classes.header}>
    <h1>FoodAdda</h1>
<HeaderButton  onClick={props.onNoCardShown} />
</header>
<div className={classes['main-image']}>
<img src={imgHeader}  alt='A table full of delicious food!'/>
</div>
</Fragment>

}
export default Header;