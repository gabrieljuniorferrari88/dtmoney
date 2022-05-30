import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import * as S from './styles';

interface Transaction {
  id: number;
  title: string;
  value: number;
  type: string;
  category: string;
  createdAt: string;
}

export function TransactionsTable() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api
      .get('transactions')
      .then((response) => setTransactions(response.data.transactions));
  }, []);

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
              <S.Td colorTextValue={transaction.type}>
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
