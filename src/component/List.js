import React, { useState } from 'react'

const List = () => {
    const [name , changeName] =useState(false)
    return (
        <div className={'List'}>
        <h1> {name} </h1>
            { name && (<ul>
                   <h3> languages ||  Tools  --  I really love 😄  </h3> 
                 <li> React js</li>
                 <li> firebase </li>
                 <li>Mongo db</li>
                 <li> node js </li>
             </ul>) }
             <button onClick={()=>{changeName("Hii... I'm aman kumar && excited to learn web developing languages ")}} > Show more </button>
        </div>
    )
}

export default List
