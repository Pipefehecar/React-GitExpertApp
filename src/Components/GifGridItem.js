import React from 'react'

export const GifGridItem = ({id, title, url}) => {
    //console.log(id, title, url)
    return (
        <div className="card animate__animated animate__bounce"> 
            <img src={url} alt={title}/>
            <b><p>{title}</p></b>   
            {/* <b><p>{title?title:'Happy dog'}</p></b>    */}
        </div>
    )
}
