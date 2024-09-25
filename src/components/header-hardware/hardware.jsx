import './hardware.css'
import NavBar from "../navbar/navbar";
import HeaderBox from '../text-header/text-box';
import HeaderHardware from '../text-hardware.jsx/text-hardware';


export default function Hardware() {
    return (
            <>
            <div className="gif-hardware">
                <NavBar />

                <main className='main-hardware'>
                    <HeaderHardware 
                    title= 'HARDWARE E REDES'
                    button= 'Quero saber mais'
                    />
                </main>
            </div>
            </>
            )
}