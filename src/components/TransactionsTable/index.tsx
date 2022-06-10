import { useTransactions } from '../../hooks/useTransactions';
import * as S from './styles';

export function TransactionsTable() {
  const { transactions } = useTransactions();

  return (
    <S.Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <S.Td>{transaction.title}</S.Td>
              <S.Td
                colorTextValue={
                  transaction.type === 'income' ? 'income' : 'outcome'
                }
              >
                {transaction.type === 'outcome' ? '-' : ''}
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(transaction.value)}
              </S.Td>
              <S.Td>{transaction.category}</S.Td>
              <S.Td>
                {new Intl.DateTimeFormat('pt-BR').format(
                  new Date(transaction.createdAt)
                )}
              </S.Td>
            </tr>
          ))}
        </tbody>
      </table>
    </S.Container>
  );
}
