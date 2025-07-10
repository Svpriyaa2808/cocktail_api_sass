import Image from "next/image"
import SearchIcon from '../../../public/search.svg'

const SearchBar = () => {
    return (
        <>
            <div className="search">
                <label htmlFor="search" className="search__text" >Get your cocktail</label>
                <div className="search__box">
                <input type="text" placeholder="Get your recipe" id="search" name="search" className="search__box--input" required />
                <button className="search__box--button" type="submit">
                    <Image src={SearchIcon} alt="search_icon"></Image>
                </button>  
                </div>
            </div>
        </>
    )
}

export default SearchBar