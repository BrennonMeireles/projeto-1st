import './style-header.css'
import LogoSenai from '../../assets/img/Logo SENAI.svg'

export default function HomeHeader() {
    return (
        <>
        <div className='gif'>
            <header className='headerhome-container'>
                <img src={LogoSenai} alt="" />
                <div className="links">
                    <a href="">Matérias</a>
                    <a href="">Especifícações</a>
                    <a href="">Créditos</a>
                </div>
            </header>
            
        </div>

        </>
    )
}