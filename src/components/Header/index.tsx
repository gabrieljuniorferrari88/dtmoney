import { Container, Content } from './styles';
import logoImg from '../../assets/logo.svg';
import { Dashboard } from '../Dashboard';

export function Header() {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Dt Money" />
        <button type="button">Nova transação</button>
      </Content>
    </Container>
  );
}
