import React from 'react'
import {ButtonComponent} from './ButtonComponent'
export function BodyComponent({text}) {
    
    const mainStyle = {
        display: 'flex',
        justifyContent: 'center',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '140',
        backgroundColor: 'gray',
        borderColor: 'white',
    }
    
    const textStyle = {
        fontSize: '2.5em'
    }

    return (
        <>
            <main style={mainStyle}>
                <ButtonComponent type='ADD' label='+'/>
                <h1 style={textStyle} className="body-component"> {text} </h1>
                <ButtonComponent type='SUBSTRACT' label='-'/>
            </main>
        </>
    )
}