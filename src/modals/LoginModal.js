import React, { useState } from 'react';
import { setGlobalState } from "../state/globalState";

const LoginModal = ({ 
    showLoginModal,
    history
}) => {

    const redirectToAdminHome = () => {
        setGlobalState("userState", true);
        if (history) history.push('/');
    }

    let modalStyle = {
        display: 'block',
        backgroundColor: 'rgba(0,0,0,0.8)'
    }

    const [password, setPassword] = useState("");

    return (
        <div className="modal show fade" style={modalStyle}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Admin Login</h5>
                        <button type="button" className="btn-close" onClick={() => showLoginModal(false)}></button>
                    </div>
                    <div className='modal-body'>
                        <div className="form-group">
                            <label>Enter Password:</label>
                            <input type="password" className="form-control" onChange={e => setPassword(e.target.value)}/>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" onClick={() => {
                            if (password === "HocusPocusInventoryFocus89") { // Temp password, chnage this
                                redirectToAdminHome();
                            }
                        }}>Submit</button>
                        <button type="button" className="btn btn-secondary" onClick={() => showLoginModal(false)}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginModal;
