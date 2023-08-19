import React from "react";
export function FooterComponent() {
    const footerStyle = {

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'none',
        borderColor: 'none',
        height: '100px'
    }

    return(
        <footer style={footerStyle}>
            <h3>SantiagoG</h3>
        </footer>
    )
}