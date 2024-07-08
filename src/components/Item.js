export default function Item(props) {

    const despesa = props.despesa

    return (
            <tr>
                <td>
                    <span>{despesa.tipo_despesa?.descricao ?? 'indisponivel'}</span>
                </td>
                <td>
                    <span>{despesa.descricao}</span>
                </td>
                <td>
                    <span>{despesa.quantidade}</span>
                </td>
                <td>
                    <span>{despesa.valor}</span>
                </td>
            </tr>
    );
}