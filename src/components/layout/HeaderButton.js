import React,{useContext, useEffect, useState} from 'react';
import classes from './HeaderButton.module.css';
import CartIcon from '../Cart/CartButton';
import CartContext from '../../store_context/Cart-context';
function Button( props)
{

    const [annimated,setAnnimated]=useState(false);

    const cartCtx=useContext(CartContext);
    const numberOfCartItems=cartCtx.items.reduce((currNum,item)=>{
        return currNum+item.amount;
    },0);//first arguement of reduce is a function and secind is the starting value


const btnClasses=`${classes.button} ${annimated ? classes.bump: ''}`

useEffect(()=>
{
    if(cartCtx.items.length===0)
    {
        return;
    }
setAnnimated(true);

const timer=setTimeout(()=>
{
setAnnimated(false);

},300);

return ()=>
{
clearTimeout(timer);
};

},[cartCtx.items]);

return <button className={btnClasses} onClick={props.onClick}>
<span className={classes.icon}>
<CartIcon />
</span>
<span>Your Cart</span>
<span className={classes.badge}>{numberOfCartItems}</span>
</button>

}
export default Button;