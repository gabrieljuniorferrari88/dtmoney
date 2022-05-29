import * as S from './styles';
import logoImg from '../../assets/logo.svg';

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}
export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <S.Container>
      <S.Content>
        <img src={logoImg} alt="Dt Money" />
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova transação
        </button>
      </S.Content>
    </S.Container>
  );
}
