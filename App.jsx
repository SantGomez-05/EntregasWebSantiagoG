import React from "react"
import { HeaderComponent, BodyComponent, FooterComponent, ButtonComponent, CounterComponent} from "./components"


export function App(){
    // Retornar ...
    return (
<>

<HeaderComponent tittle='COUNTER'/>

<BodyComponent text='0'/>

<FooterComponent/>

 <CounterComponent/>


</>
    )
}
