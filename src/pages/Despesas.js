
import { useState } from "react"
import despesas from '../despesas.json'
import Item from '../components/Item'
import Rodape from "../components/Rodape"
import Cabecalho from "../components/Cabecalho"
import Botao from '../components/Botao'
import InputText from '../components/InputText';
import { useNavigate } from 'react-router-dom';

export default function Despesas() {
  const [listaDespesas, setListaDespesas] = useState(despesas.item)
  const [tipoDespesaSelecionada, setTipoDespesaSelecionada] = useState('');

  const abrirModal = () => {
    var modal = document.getElementById('idmodal');
    modal.showModal();
}

const fechaModal = () =>{
    var modal = document.getElementById('idmodal');
    document.querySelector("#descricao").value = "";
    document.querySelector("#quantidade").value = "";
    document.querySelector("#valor").value = "";
    modal.close();
  } 

const selectTipoDespesa = (event) => {
  setTipoDespesaSelecionada(event.target.value);
};
const submit = (e) => {
    const valores = {
        descricao: e.target.elements.descricao.value,
        quantidade: e.target.elements.quantidade.value,
        valor: e.target.elements.valor.value
    }

    const despesa  = [ {
        "descricao": valores.descricao,
        "quantidade": valores.quantidade,
        "tipo_despesa": {
          "descricao": tipoDespesaSelecionada,
        },
        "valor": valores.valor
      } 
    ]

   setListaDespesas(listaDespesas.concat(despesa));
    fechaModal();
  }

const navigate = useNavigate();

const verificarResumo = () => {
  navigate('/Resumo', { state: { listaDespesas } });
};

  return (
    <div>
      <Cabecalho titulo="Controle de despesas" />
      <br/>
        <section className="items">
          <table>
            <tbody id="tabela">
                <tr>
                    <th>Tipo de Despesa</th>
                    <th>Descrição</th>
                    <th>Quantidade</th>
                    <th>Valor</th>
                </tr>
                {listaDespesas.map((despesa, index) => (
                  <Item key={index} despesa={despesa}/>
                ))}
              </tbody>
          </table>
        </section>
        <div>
            <br/>
            <menu className='menuBotoes'>
                <Botao id="addBtn" className="addBtn" acao={abrirModal} value="Adicionar Despesa"/>
                <Botao id="addBtn" className="addBtn" acao={verificarResumo} value="Verificar Resumo" />
            </menu>
            <dialog className="modal" id="idmodal">
                <div className="modalTitle">Informações da nova despesa</div>
                <div>
                    <form method="dialog" onSubmit={submit}>
                        <p className="alerta">*Todos os campos são de preenchimento obrigatório</p>
                        <br/>
                        <div className="input">
                            <select id="tipoDespesa" name="tipoDespesa" value={tipoDespesaSelecionada} onChange={selectTipoDespesa}>
                                <option>Tipo de despesa:</option>
                                <option value="Conta de Luz">Conta de Luz</option>
                                <option value="Aluguel">Aluguel</option>
                                <option value="Cartão de crédito">Cartão de crédito</option>
                                <option value="Escola">Escola</option>
                                <option value="Gastos Extras">Gastos Extras</option>
                            </select>
                            <InputText id="descricao" placeholder="Descrição" name="descricao"/>
                            <InputText id="quantidade" placeholder="Quantidade" name="quantidade"/>
                            <InputText id="valor" placeholder="Valor" name="valor"/>
                        </div>
                        <menu className='menuBotoes'>
                            <Botao id="cancelar" className="btnCancelar" acao={fechaModal} value="Cancelar"></Botao>
                            <Botao type="submit"  id="botaoSalvar" className="btnSalvar" value="Salvar"></Botao>
                        </menu>
                    </form>
                </div>
            </dialog>
        </div>
      <Rodape />
  </div>
  )
}
