'use client'
import Image from "next/image"
import SearchIcon from '../../../public/search.svg'
import {useState} from 'react'

const SearchBar = () => {

    const [inputValue,setInputValue] = useState<string>("")

    const handleInput = (e) => {
        setInputValue(e.target.value)
    }

     const handleSubmit = (e) => {
        e.preventDefault()
        console.log(inputValue)
    }
    return (
        <>
            <form className="search" onSubmit={handleSubmit}>
                <label htmlFor="search" className="search__text" >Get your cocktail</label>
                <div className="search__box">
                <input type="text" placeholder="Get your recipe" id="search" name="search" className="search__box--input"
                        onInput={(e)=>handleInput(e)} value={inputValue} required />
                <button className="search__box--button" type="submit">
                    <Image src={SearchIcon} alt="search_icon" ></Image>
                </button>  
                </div>
            </form>
        </>
    )
}

export default SearchBar