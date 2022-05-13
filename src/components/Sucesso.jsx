import '../css/sucesso.css'

export default function Sucesso (props) {
    return (
        <div class='sucesso' style={{display: props.display}}>
            <p style={{width: 'fitContent', margin: '0 auto'}}>{props.mensagem}</p>
        </div>
    )
}