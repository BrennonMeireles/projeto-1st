import './style-header.css'
import LogoSenai from '../../assets/img/Logo SENAI.svg'

export default function HomeHeader() {
    return (
        <>
            <header className='headerhome-container'>
                <img src={LogoSenai} alt="" />
                <div className="links">
                    <a href="">Matérias</a>
                    <a href="">Especifícações</a>
                    <a href="">Créditos</a>
                </div>
            </header>
            <main className='text-header'>
                <h1>DESENVOLVIMENTO DE SISTEMAS</h1>
                <h4 className='Curso'>C U R S O</h4>
                <h4 className='Senai'>SENAI</h4>
            </main>
        </>
    )
}