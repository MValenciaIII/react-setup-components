import React from 'react'
import Header from './components/Header'
import Body from './components/Body';
import "./style.css"

function App() {

    //?FUNCTIONAL COMPONENTS CAN ONLY HAVE ONE PARENT ELEMENT
    return(
        <div className='container'>
            <Header />
            <Body />
        </div>
    )
}




export default App;