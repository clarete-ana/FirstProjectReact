import styled from 'styled-components';

const Opcao = styled.li`
  display: flex;
`
const Opcoes = styled.ul`
  display: flex;
  font-size: 16px;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-width: 120px;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
`
const textoOpcoes = ['CATEGORIAS' , 'FAVORITOS' , 'MINHA ESTANTE'];

function OpcoesHeader()
{
  return(
    <Opcoes>
          {textoOpcoes.map( (texto) => (
            <Opcao><p>{texto}</p></Opcao>
            ) ) }
        </Opcoes>
  )
}

export default OpcoesHeader;