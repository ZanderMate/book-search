import React from 'react';


function Navbar(props) {
    return (
        <ul className="nav nav-tabs">
            <li className="nav-item" style={{ fontSize: 32 }}>
                <b>Google Book Search</b>
            </li>
            <li className="nav-item">
                <a href="/search" onClick={() => props.handlePageChange("Search")} className="nav-link">
                    Search
          </a>
            </li>
            <li className="nav-item">
                <a href="/saved" onClick={() => props.handlePageChange("Saved")} className="nav-link">
                    Saved
          </a>
            </li>
        </ul>
    );
}

export default Navbar