import React, { useState } from 'react';
import Modal from 'react';
// import './showModal.css'; 



const MyModal= () => {
    const [showModal , setShowModal] = useState(false);
    const Modal = () =>{
        return <>
        <div className="modal-wrapper" onClick={closeModal}></div>
        <div className="modal-container">
        <h1>Add User</h1>
        {/* add form here */}
    <button onClick={() => setShowModal(false)}>Added</button>
    </ div>
        </>
    };
};

// return (
//     <>
//     <button onClick={() => setShowModal(true)}>Open Modal</button>
//     {ShowModal && <MyModal />}
//     </>
// )


export default MyModal;
