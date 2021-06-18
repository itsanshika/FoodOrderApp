import React from 'react';
import classes from './HeaderButton.module.css';
import CartIcon from '../Cart/CartButton';

function Button()
{
return <div className={classes.button}>
    <span className={classes.icon}>
<CartIcon />
    </span>
    <span>Your Cart</span>
    <span className={classes.badge}>3</span>
</div>

}
export default Button;