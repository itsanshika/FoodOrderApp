import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import classes from './Model.module.css';


function Backdrop(props)
{
return <div className={classes.backdrop} onClick={props.onClose}></div>
}

function ModelOverlay(props)
{
return <div className={classes.modal}>
    <div className={classes.content}>{props.children}</div>
</div>
}
const portal= document.getElementById('overlays');

function Model(props)
{



return <Fragment>
    {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>,portal)};
    {ReactDOM.createPortal(<ModelOverlay>{props.children}</ModelOverlay>,portal)};
</Fragment>

}
export default Model;