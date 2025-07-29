'use client'
import { SocialLogo } from 'social-logos';

const Footer = () => {
    return (
        <footer className="footer">
            <div className='footer__content'>
                <div className='footer__content--text'>
                    <p>Terms & Condition</p>
                    <p>Privacy Policy</p>
                    <p>Reviews</p>
                    <p>Cookies Policy</p>
                </div>
            
                <div className='footer__content--logo'>
                    <SocialLogo icon='facebook' size={ 36 } fill='#A8763E'/>
                    <SocialLogo icon='instagram' size={ 36 } fill='#A8763E'/>
                    <SocialLogo icon='youtube' size={ 36 } fill='#A8763E'/>
                </div>
            </div>

            <div className='footer__copytext'>
                <p>Copyrights 2025.</p>
            </div>
        </footer>
    )
}

export default Footer