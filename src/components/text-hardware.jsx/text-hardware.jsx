import './text-style-hardware.css'
import SetaBaixo from '../../assets/img/Arrow 1.svg'

export default function HeaderHardware({ title , button }) {
    return (
        <div className='gif-hardware'>
            <main className='text-header'>
                <h1>{title}</h1>
                <h4 className='Curso'>C U R S O</h4>
                <h4 className='Senai'>SENAI</h4>
                <button>{button} <img src={SetaBaixo} alt="" /> </button> 
            </main>

        </div>
    )
}