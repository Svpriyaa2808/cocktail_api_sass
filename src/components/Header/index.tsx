import Image from "next/image"
import Logo from '../../../public/logo.png'

const Header = () => {
    return (
        <header className="header">
            <div className="header__logo">
                <Image src={Logo} alt="logo" />
            </div>
            <h1 className="header__title">Cocktail Recipe</h1>
        </header>
    )
}

export default Header