import React from 'react';
import './status.css'

const Status = ({ status }) => {
    return (
        <div className="status">Status : <>{status}</></div>
    )
}

export default Status;