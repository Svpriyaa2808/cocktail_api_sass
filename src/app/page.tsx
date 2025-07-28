'use client'
import {useState} from 'react'
import {CocktailDataType} from '@/utils/types'
import WelcomeMessage from '@/components/WelcomeMessage';
import DisplayRecipe from '@/components/DisplayRecipe'

export default function Home() {

  const[getRecipe,setGetRecipe] = useState<CocktailDataType|null>(null)

   const fetchRecipe = async (): Promise<void> => {
        try {
            const API_URL: string = "https://www.thecocktaildb.com/api/json/v1/1/random.php"
            const response: Response = await fetch(`${API_URL}`)
            const data = await response.json();
            const drinks = data.drinks[0]
            console.log(drinks.strDrink)
            
            const RecipeData: CocktailDataType = {    
                name: drinks.strDrink,
                image: drinks.strDrinkThumb,
            }

            setGetRecipe(RecipeData)
        } catch (error) {
            console.log(`Something went wrong: ${error}`)
        }
    }


  return (
    <div className="recipe">
      <button className="recipe__button" onClick={fetchRecipe}>Get a cocktail</button>
      <div className="recipe__container">
      {!getRecipe && <WelcomeMessage />}
      {getRecipe && <DisplayRecipe {...getRecipe}/>}
      </div>
    </div>
  );
}
