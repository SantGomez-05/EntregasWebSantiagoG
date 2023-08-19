import React from "react"
export function ButtonComponent({label, type}){


const dStyle = {
    backgroundColor: 'green',
    justifyContent: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'yellow',
    borderColor: 'none',



}

const textStyle = { 
    backgroundColor: 'orange',
    fontSize: '3em',
}

    return(

    <div style={dStyle}>

        <button style={textStyle} type={type}> {label} </button>
        
    </div>


    )
}
