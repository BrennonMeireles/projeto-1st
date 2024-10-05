import TextBox from "../../components/text-box/text-box";
import HeaderBox from "../../components/text-header/text-box";
import Title from "../../components/title/title";
import CiscoProject from "../../assets/img/projeto-basico-cisco.png";

import './hare.css'

export default function HarePage() {
    return (
        <>
            <div className="container-text">
                <TextBox
                    title='Sobre o Curso'
                    text='A disciplina de Hardware e Redes tem como objetivo desenvolver habilidades fundamentais na preparação de ambientes de hardware, requisitos para redes de computadores e funcionamento de sistemas computacionais.'
                />
            </div>

            <div className="container-img"></div>

            <Title
                title='CISCO PACKET TRACER'
                subTitle='REDES'
            />

            <article className="container-img-ccna">
                <div className="moldura-img">
                    <img src={CiscoProject} alt="projeto simples no packet tracer" />
                </div>
            </article>

        </>
    )
}