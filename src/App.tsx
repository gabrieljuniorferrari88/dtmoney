import { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal';
import { globalStyles } from './stitches.config';
import { TransactionsProvider } from './TransactionsContext';

globalStyles();
Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function handlerOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }
  function handlerCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }
  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handlerOpenNewTransactionModal} />
      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handlerCloseNewTransactionModal}
      />
    </TransactionsProvider>
  );
}
