import React,{Fragment} from 'react';

import imgHeader from '../../assets/imgHeader.jpg';
import classes from './Header.module.css';

function Header()
{

return <Fragment>
<header className={classes.header}>
    <h1>FoodAdda</h1>
<button>Your Cart</button>
</header>
<div className={classes['main-image']}>
<img src={imgHeader}/>
</div>
</Fragment>

}
export default Header;