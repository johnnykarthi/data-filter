import React from 'react'
import ReactDOM from 'react-dom'
import './Modal.css'
export default function Modal({ content, deleteModal }) {
    return (
        ReactDOM.createPortal(
            <>
                <div class="mm">
                </div>
                <div class="mainn">
                    <h3>{content}</h3>
                    <div class="d-flex justify-content-center">
                        <button class="btn btn-danger" onClick={deleteModal}>Okay</button>
                    </div>
                </div>
            </>
            , document.getElementById('root-portal'))

    )
}
