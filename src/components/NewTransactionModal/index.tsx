import Modal from 'react-modal';
import * as S from './styles';

import { Cross1Icon } from '@radix-ui/react-icons';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <S.ButtonClose type="button" onClick={onRequestClose}>
        <S.ImgClose />
      </S.ButtonClose>

      <S.Container>
        <S.H2>Nova Transação</S.H2>

        <S.Input placeholder="Título" />
        <S.Input type="number" placeholder="Valor" />
        <S.Input placeholder="Categoria" />

        <S.ButtonTransaction type="submit">Cadastrar</S.ButtonTransaction>
      </S.Container>
    </Modal>
  );
}
