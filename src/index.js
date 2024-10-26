import '@/assets/index.css';

import { createRoot } from 'react-dom/client';

import App from './app';

const containerElement = document.querySelector('#root');

const root = createRoot(containerElement);

root.render(<App />);
