export default function Botao(props) {

    return (
        <button className={props.className} id={props.id} onClick={props.acao}>{props.value}</button>
    );
}