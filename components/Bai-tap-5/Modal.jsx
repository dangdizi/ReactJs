import React, { useState } from 'react'

export default function Modal () {

    const [modalStatus, setModal] = useState (false);

    const modalToggle = () => {
        setModal (!modalStatus);
        console.log(modalStatus);
    };

    return <>
    <button onClick={modalToggle}>Hiển thị modal</button>
    {modalStatus && (
        <div style={{border: '1px solid #333'}} className='modal'>
            <h5>Header title</h5>
            <p>Modal content</p>
            <button style={{border: '1px solid #333'}}>Close modal</button>

        </div>
    )}
    </>
}
