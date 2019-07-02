
import React,{ Component } from 'react';
import ReactDOM from 'react-dom';

class Modal extends Component {
    render() {
        const {
            visible,
            onClose,
            children
        } = this.props
        return visible && ReactDOM.createPortal(
        <div className="modal">
            { children }
        </div>, document.body)
    }
}
export default Modal