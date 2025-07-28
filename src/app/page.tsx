'use client'
import {useState} from 'react'
import {CocktailDataType} from '@/utils/types';
import DisplayRecipe from '@/components/Displayrecipe'

export default function Home({inputValue}) {

  // const [recipe,setRecipe] = useState<CocktailDataType|null>(null) 
  // const fetchRecipe = async(): Promise<void> => {
  //   try {
  //     const API_URL: string = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f="
  //           const response: Response = await fetch(`${API_URL}${inputValue}`)
  //           const data = await response.json();
  //   }
  // }
  return (
 <>
 {inputValue && <p>hi</p>}
 </>
  );
}
