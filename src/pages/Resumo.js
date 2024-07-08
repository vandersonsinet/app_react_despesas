import React from 'react';
import Cabecalho from '../components/Cabecalho'
import Rodape from '../components/Rodape'
import Card from '../components/Card'
import { useLocation } from 'react-router-dom';

export default function Resumo() {
  const location = useLocation();
  const { listaDespesas } = location.state || { listaDespesas: [] };

    // Agrupar despesas por tipo
    const despesasAgrupadas = listaDespesas.reduce((aux, despesa) => {
      const tipo = despesa.tipo_despesa.descricao;
      const valor = parseFloat(despesa.valor);
      if (!aux[tipo]) {
          aux[tipo] = 0;
      }
      aux[tipo] += valor;
      return aux;
  }, {});

    return (
      <div>
        <Cabecalho titulo="Resumo das despesas"/>
        <br />
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', paddingTop: '150px'}}>
        {Object.keys(despesasAgrupadas).map((tipo, index) => (
                <Card
                    key={index}
                    title={tipo}
                    content={"Gasto total: " + despesasAgrupadas[tipo]}
                />
            ))}
        </div>
        <Rodape/>
      </div>
    );
}