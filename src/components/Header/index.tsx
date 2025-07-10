import Image from "next/image"
import Logo from '../../../public/cocktail-logo.svg'

const Header = () => {
    return (
        <header className="header">
            <div className="header__logo">
                <Image src={Logo} alt="logo" />
            </div>
            <h1 className="header__title">Cocktail</h1>
        </header>
    )
}

export default Header