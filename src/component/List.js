import React, { useState } from 'react'

const List = () => {
    const [name , changeName] =useState(" Not yet set")
    return (
        <div className={'List'}>
        <h1> {name} </h1>
             <ul>
                 <li> Apple </li>
                 <li>Samsung </li>
                 <li>Onelus</li>
                 <li> Xioami </li>
             </ul>
             <button onClick={()=>{changeName("Aman kumar ...")}} > My name </button>
        </div>
    )
}

export default List
