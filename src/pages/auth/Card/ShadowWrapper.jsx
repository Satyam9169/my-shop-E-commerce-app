import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ShadowWrapper.css'; // Custom styles for extra shadow or layout

const ShadowWrapper = ({ children }) => {
    return (
        <div className="shadow-wrapper">
            <div className="shadow-backdrop"></div>
            <div className="shadow-content bg-white p-4 rounded shadow-lg">
                {children}
            </div>
        </div>
    );
};

export default ShadowWrapper;
