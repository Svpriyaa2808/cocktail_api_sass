import {CocktailDataType} from '@/utils/types'
import Image from 'next/image'
import './displayrecipe.scss'
const DisplayRecipe = ({name,instruction,image,requiredIngredients}:CocktailDataType) => {
    return (
        <div className='displayrecipe'>
            <h3 className='displayrecipe__title'>{name}</h3>
            <Image src={image} alt={name} width={300} height={300} className='displayrecipe__image'/>

            <div className='displayrecipe__info'>
                <h4 className='displayrecipe__info--title'>Ingredients:</h4>
                {requiredIngredients.map((item:string,index:number) => 
                    <li key={index} className='displayrecipe__info--content'>{item}</li>)}
                <h4 className='displayrecipe__info--title'>Instructions</h4>
                <p  className='displayrecipe__info--content'>{instruction}</p>
            </div>
        </div>
    )
}

export default DisplayRecipe