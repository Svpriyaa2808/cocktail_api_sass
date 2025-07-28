import Image from "next/image"
import Cocktail from '../../../public/blue-lagoon-cocktail.jpg'
const WelcomeMessage = () => {
    return (
        <div className="intro">
            <div className="intro__content">
                <h3 className="intro__content--title">Discover the World of Cocktails</h3>
                <p className="intro__content--para">Cocktails are a delightful fusion of flavors, aromas, and creativity. From timeless classics
                    like the Mojito and Margarita to modern mixes with exotic twists, there's a cocktail for every taste and occasion.Whether you're a mixology enthusiast or
                 just looking for a fun new drink, we've got you covered.</p>
            </div>

            <div className="intro__image">
                <img src="/blue-lagoon-cocktail.jpg" alt="blue-lagoon-cocktail"></img>
            </div>
        </div>
    

    )
}

export default WelcomeMessage