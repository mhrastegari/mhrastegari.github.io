import { App } from '@widgets/App';
import ReactDOM from 'react-dom/client';
import './main.css';

const rootElement = document.getElementById('app');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<App />);
}
