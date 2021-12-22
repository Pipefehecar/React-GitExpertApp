import React, {useState} from 'react'
import AddCategory from './Components/AddCategory';
import GifGrid from './Components/GifGrid'
const GitExpertApp = () => {
    
    const [categories, setCategories] = useState(['The Simpsons'])
    // const handleAdd = () => {
    //     setCategories([...categories,'xxx'])
    //     console.log(categories)
    // }
    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory setCategories = {setCategories}/>
            <hr/>
            {/* <button onClick={handleAdd}>Agregar</button> */}
            <ol>
                {
                categories.map(category => (
                    <GifGrid key={category} category={category}/>
                ))
                }
            </ol>
        </>
    )
}

export default GitExpertApp
