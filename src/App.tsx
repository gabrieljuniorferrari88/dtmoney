import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { globalStyles } from './stitches.config';

export function App() {
  globalStyles();
  return (
    <>
      <Header />
      <Dashboard />
    </>
  );
}
