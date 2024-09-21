import TextBox from "../../components/text-box/text-box";
import Cisco from '../../assets/img/GIFS/ciscopretologo.gif'

import './hare.css'

export default function HarePage(){
    return(
        <>
            <div className="container-text">
                <TextBox
                    title='Sobre o Curso'
                    text='A disciplina de Hardware e Redes tem como objetivo desenvolver habilidades fundamentais na preparação de ambientes de hardware, requisitos para redes de computadores e funcionamento de sistemas computacionais.'
                />
            </div>

            <div className="container-img"></div>

            <div className="container-img-ccna"></div>
        </>
    )
}