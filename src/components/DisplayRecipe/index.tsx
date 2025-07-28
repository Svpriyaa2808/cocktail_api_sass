import {CocktailDataType} from '@/utils/types'

const DisplayRecipe = ({name,image}:CocktailDataType) => {
    return (
        <div>
            <p>{name}</p>
        </div>
    )
}

export default DisplayRecipe