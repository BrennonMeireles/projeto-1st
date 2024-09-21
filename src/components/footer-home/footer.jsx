import ImageYou from '../../assets/img/Vectorlogo_youtube.svg'
import ImageInsta from '../../assets/img/Vectorlogo_instagram.svg'
import ImageFace from '../../assets/img/Vectorlogo_facebook.svg'
import ImageSenai from '../../assets/img/logo-senai.svg'
import './style-footer.css'

export default function HomeFooter() {
    return (
        <footer>
            <div className='image-senai-footer'>
                <img src={ImageSenai} alt="Imagem do SENAI" className='Imagem-Senai' />
            </div>

            <div className='contacts-footer'>
                <h1 className='H1contacts-footer'>CONTATOS</h1>
                <p>+55 11 5642-3440</p>x
                <p>thais.reis@sp.senai.br</p>
                <p>R. Bento Branco de Andrade Filho, 379</p>
                <p>São Paulo - SP</p>
                <div className='button-footer'>
                    <button><img src={ImageFace} alt="Facebook" /></button>
                    <button><img src={ImageInsta} alt="Instagram" /></button>
                    <button><img src={ImageYou} alt="Youtube" /></button>
                </div>
            </div>
            <div className='information-footer'>
                <h1 className='H1information-footer'>INFORMAÇÕES</h1>
                <p>Grade Curricular</p>
                <p>Especificações</p>
                <p>Créditos</p>
            </div>
           

        </footer>
    )
}