import { Fragment } from 'react'
import classes from './modal.css'
import ReactDom from 'react-dom'
const Backdrop=props=>
{
    return <div className={classes.backdrop} onClick={props.onClose}/>
}
const ModalOverlay=props=>
{
    return <div className={classes.modal}>
    <div className={classes.content}>{props.children}</div>
    </div>
}
const Modal=props=>
{
    return <Fragment>
        {ReactDom.createPortal(<Backdrop onlose={props.onClose}/>,portalElement)}
        {ReactDom.createPortal(
            <ModalOverlay>{props.children}</ModalOverlay>,
            portalElement
        )}

    </Fragment>
}
export default Modal;