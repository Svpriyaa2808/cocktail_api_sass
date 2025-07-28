'use client'
import {useState} from 'react'
import {CocktailDataType} from '@/utils/types'
import WelcomeMessage from '@/components/WelcomeMessage';
import DisplayRecipe from '@/components/DisplayRecipe'

export default function Home() {

  const[getRecipe,setGetRecipe] = useState<CocktailDataType|null>(null)
  let requiredMeasurementArray:string[]=[];
   const fetchRecipe = async (): Promise<void> => {
        try {
            const API_URL: string = "https://www.thecocktaildb.com/api/json/v1/1/random.php"
            const response: Response = await fetch(`${API_URL}`)
            const data = await response.json();
            const drinks = data.drinks[0]
           
            const ingredientsKey = Object.keys(drinks).filter(item => item.includes("strIngredient"));
            console.log(drinks[ingredientsKey[1]])
            for(let i = 0; i < ingredientsKey.length; i++) {
            if (drinks[ingredientsKey[i]]) {
                requiredMeasurementArray.push(drinks[ingredientsKey[i]] + "-" + drinks[`strMeasure${i+1}`])
            }else{
                break;
            }
        }
            
            const RecipeData: CocktailDataType = {    
              name: drinks.strDrink,
              instruction:drinks.strInstructions,
              image: drinks.strDrinkThumb,
              requiredIngredients:requiredMeasurementArray
            }

            setGetRecipe(RecipeData)
        } catch (error) {
            console.log(`Something went wrong: ${error}`)
        }
    }

    const handleReset = () => {
      setGetRecipe(null)
    }

  return (
    <div className="recipe">
      <div className="recipe__button">
        <button className='recipe__button--button' onClick={fetchRecipe}>Get a cocktail</button>  
      </div> 
      <div className="recipe__container">
      {!getRecipe && <WelcomeMessage />}
      {getRecipe &&
      <>
      <DisplayRecipe {...getRecipe}/>
      
      <button className='recipe__container--button' onClick={handleReset}>Back</button>
      </>}
      </div>
    </div>
  );
}
