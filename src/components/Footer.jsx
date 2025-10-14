import './Footer.css'
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
    return (
        <div className='footerContainer'>
            <h2 className='footerText'>Todos los derechos reservados Pompagua Latinoamericana</h2>
            <div className='icons-container'>
                <a href="https://www.instagram.com/pompagualatinoamericanasa" target="_blank" rel="noopener noreferrer">
                    <FaSquareInstagram className='icon' />
                </a>

                <a href="https://bit.ly/pompagua" target="_blank" rel="noopener noreferrer">
                    <IoLogoWhatsapp className='icon' />
                </a>

            </div>
        </div>
    )
}

export default Footer
