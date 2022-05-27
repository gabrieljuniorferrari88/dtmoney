import * as S from './styles';

export function TransactionsTable() {
  return (
    <S.Container>
      <table>
        <thead>
          <th>Título</th>
          <th>Valor</th>
          <th>Categoria</th>
          <th>Data</th>
        </thead>

        <tbody>
          <tr>
            <S.Td>Desenvolvimento de WebSite</S.Td>
            <S.Td test>R$12.000</S.Td>
            <S.Td>Desenvolvimento</S.Td>
            <S.Td>27/05/2022</S.Td>
          </tr>
          <tr>
            <S.Td>Prestação Boleto</S.Td>
            <S.Td test="false">- R$1.000</S.Td>
            <S.Td>Casa</S.Td>
            <S.Td>25/05/2022</S.Td>
          </tr>
        </tbody>
      </table>
    </S.Container>
  );
}
