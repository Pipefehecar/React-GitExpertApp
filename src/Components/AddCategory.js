import React, {useState} from 'react'
import PropTypes from 'prop-types'
const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState('');
    const handleSubmit = (e) =>{
        e.preventDefault();
        if (inputValue.trim().length >2){
            //setCategories([...categories,inputValue]); sending categories from dad
            setCategories(cats => [inputValue,...cats]);
            setInputValue('');
            console.log('submittt perroo');
        }
    }
    return (
        <form onSubmit={handleSubmit}>
        <h1>{inputValue}</h1>
           <input 
           type="text"
           value={inputValue}
           onChange={ (e) => {setInputValue(e.target.value)}}
           /> 
        </form>
    )
}
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory
