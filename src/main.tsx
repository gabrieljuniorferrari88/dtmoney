import React from 'react';
import ReactDOM from 'react-dom/client';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Salário',
          value: '2000',
          type: 'income',
          category: 'Salário',
          createdAt: new Date('2022-05-29 09:00:00'),
        },
        {
          id: 2,
          title: 'Comida',
          value: '1000',
          type: 'outcome',
          category: 'Comida',
          createdAt: new Date('2022-05-29 09:00:00'),
        },
        {
          id: 3,
          title: 'Viagem',
          value: '500',
          type: 'outcome',
          category: 'Viagem',
          createdAt: new Date('2022-05-29 09:00:00'),
        },
      ],
    });
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', {
        ...data,
        value: Number(data.value),
      });
    });
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
