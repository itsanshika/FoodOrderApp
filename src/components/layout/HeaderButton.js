import React,{useContext} from 'react';
import classes from './HeaderButton.module.css';
import CartIcon from '../Cart/CartButton';
import CartContext from '../../store_context/Cart-context';
function Button( props)
{
    const cartCtx=useContext(CartContext);
    const numberOfCartItems=cartCtx.items.reduce((currNum,item)=>{
        return currNum+item.amount;
    },0);//first arguement of reduce is a function and secind is the starting value

return <button className={classes.button} onClick={props.onClick}>
<span className={classes.icon}>
<CartIcon />
</span>
<span>Your Cart</span>
<span className={classes.badge}>{numberOfCartItems}</span>
</button>

}
export default Button;