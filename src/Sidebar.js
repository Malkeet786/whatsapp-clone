import React from 'react';
import './Sidebar.css';
import DonutLargeIcon from "@material-ui/icons/";
function Sidebar() {
    return (
        <div className="sidebar">
            <h1>Sidebar</h1>
            <div className="sidebar_header">
                <div className="sidebar_headerRight">
                    <DonutLargeIcon />
                </div>
            
            </div>
        </div>
    )
}

export default Sidebar;
