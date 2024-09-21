import TextBox from "../text-box/text-box"
import "./style-main.css"

export default function MainHome() {
    return (
        <main className="materia-container">
            <div>
                <h1>MA<br />
                    TE<br />
                    RI<br />
                    AS</h1>
            </div>
            <section className="container-textbox">
                <TextBox 
                    title = 'Currículo'
                    text = 'Dentro do curso, no primeiro semestre, temos nossos horários divididos entre quatro matérias, LIMA, SOP, HARE e FPOO, cada uma abordando um dos pílares do desenvolvimento de sistemas, numa abordagem fortemente atrelada a prática, que visa capacitar profissionais de alto padrão para o mercado de trabalho.'
                /> 
                <TextBox 
                    title='Nosso Projeto'
                    text= 'Juntos, projetamos e codificamos, uma página web, onde constam todos os requisitos citados na sprint, focados em redesenhar os padrões das páginas web da organização para algo mais diverso e interessante, usando de cores e texturas que remontam a identidade do curso no contexto em que estamos inseridos.'
                />
            </section>
        </main>
    )
}