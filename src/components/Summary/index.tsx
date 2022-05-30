import { Container } from './styles';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { useContext } from 'react';
import { TransactionsContext } from '../../TransactionsContext';

export function Summary() {
  const data = useContext(TransactionsContext);
  console.log('🚀 ~ file: index.tsx ~ line 10 ~ Summary ~ data', data);
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Ícone de entrada de dinheiro" />
        </header>
        <strong>R$ 1.000,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Ícone de saída de dinheiro" />
        </header>
        <strong>- R$ 100,00</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Ícone de totalizador do dinheiro" />
        </header>
        <strong>R$ 900,00</strong>
      </div>
    </Container>
  );
}
