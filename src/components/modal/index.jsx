import { useRef } from 'react'
import './modal.css'
import useOutsideClick from './outsideClick';

const Modal = ({ id, header, body, footer, onClose }) => {
    const ref = useRef();
    useOutsideClick(ref, onClose);

    return (
        <div id={id || 'modal'} className='modal-overlay'>
            <div className='modal'>
                <div ref={ref} className="modal-content">
                    <div className="header">
                        <span onClick={onClose} className='close-btn'>&times;</span>
                        <h2>
                            {header ? header : "Header"}
                        </h2>
                    </div>
                    <div className="body">
                        {
                            body ? body : <div>body</div>
                        }
                    </div>
                    <div className="footer">
                        {
                            footer ? footer : <div>footer</div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal