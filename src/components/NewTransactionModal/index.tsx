import Modal from 'react-modal';
import * as S from './styles';

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { FormEvent, SetStateAction, useState } from 'react';
import { api } from '../../services/api';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('income');

  function handleCreatedNewTransaction(event: FormEvent) {
    event.preventDefault();

    const data = {
      title,
      value,
      category,
      type,
    };

    api.post('/transactions', data);
  }

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

      <S.Container onSubmit={handleCreatedNewTransaction}>
        <S.H2>Nova Transação</S.H2>

        <S.Input
          placeholder="Título"
          value={title}
          onChange={(event: { target: { value: SetStateAction<string> } }) =>
            setTitle(event.target.value)
          }
        />
        <S.Input
          type="number"
          placeholder="Valor"
          value={value}
          onChange={(event: { target: { value: any } }) =>
            setValue(Number(event.target.value))
          }
        />

        <S.TypeContainer>
          <S.TypeContainerButton
            type="button"
            border="income"
            isActive={type === 'income' ? 'income' : 'none'}
            onClick={() => {
              setType('income');
            }}
            value={type}
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
            value={type}
          >
            <S.TypeContainerImg
              src={outcomeImg}
              alt="Ícone de saída de dinheiro"
            />
            <S.TypeContainerSpan>Saída</S.TypeContainerSpan>
          </S.TypeContainerButton>
        </S.TypeContainer>

        <S.Input
          placeholder="Categoria"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />

        <S.ButtonTransaction type="submit">Cadastrar</S.ButtonTransaction>
      </S.Container>
    </Modal>
  );
}
