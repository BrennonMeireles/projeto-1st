import './style-header.css'
import NavBar from '../../components/navbar/navbar'

export default function HomeHeader() {
    return (
        <>
            <NavBar />
            <main className='text-header'>
                <h1>DESENVOLVIMENTO DE SISTEMAS</h1>
                <h4 className='Curso'>C U R S O</h4>
                <h4 className='Senai'>SENAI</h4>
            </main>
        </>
    )
}