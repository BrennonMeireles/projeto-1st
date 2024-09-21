import './text-box.css'

export default function TextBox({title, text}) {
    return (
        <>
            <div className="text-box">
                <div>
                    <div className="quadrado-icon"></div>
                    <h4>{title}</h4>
                </div>
                <p>{text}</p>
            </div>
        </>
    )
}