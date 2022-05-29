import Modal from 'react-modal';
import * as S from './styles';

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { useState } from 'react';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const [type, setType] = useState('income');
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

        <S.TypeContainer>
          <S.TypeContainerButton
            type="button"
            border="income"
            isActive={type === 'income' ? 'income' : 'none'}
            onClick={() => {
              setType('income');
            }}
          >
            <S.TypeContainerImg
              src={incomeImg}
              alt="Ícone de entrada de dinheiro"
            />
            <S.TypeContainerSpan>Entrada</S.TypeContainerSpan>
          </S.TypeContainerButton>

          <S.TypeContainerButton
            type="button"
            border="outcome"
            onClick={() => {
              setType('outcome');
            }}
            isActive={type === 'outcome' ? 'outcome' : 'none'}
          >
            <S.TypeContainerImg
              src={outcomeImg}
              alt="Ícone de saída de dinheiro"
            />
            <S.TypeContainerSpan>Saída</S.TypeContainerSpan>
          </S.TypeContainerButton>
        </S.TypeContainer>

        <S.Input placeholder="Categoria" />

        <S.ButtonTransaction type="submit">Cadastrar</S.ButtonTransaction>
      </S.Container>
    </Modal>
  );
}
