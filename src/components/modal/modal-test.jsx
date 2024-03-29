import { useState } from 'react'
import Modal from "./index.jsx"

const ModalTest = () => {
    const [showModal, setShowModal] = useState(false);

    const handleModal = () => {
        setShowModal((prev) => !prev);
    }

    const handleClose = () => {
        setShowModal(false);
    }

    return (
        <div>
            <button onClick={handleModal}>Open Modal</button>
            {
                showModal && <Modal onClose={handleClose}/>
            }
        </div>
    )
}

export default ModalTest