import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { globalStyles } from './stitches.config';

globalStyles();
export function App() {
  return (
    <>
      <Header />
      <Dashboard />
    </>
  );
}
