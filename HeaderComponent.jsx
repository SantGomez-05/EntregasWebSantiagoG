import React from "react"


export function HeaderComponent({tittle}){
    const hStyle = {

        backgroundColor: "green",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'white',
        color: 'white',
        width: '500px',
        height: '100px'
    
    }
    return(

        <header> 

        <h1 style={hStyle} className="counter-title"> {tittle} </h1>
            
        </header>

    )
}
