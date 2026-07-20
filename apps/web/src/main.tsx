import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './i18n';
import App from './App';
import './styles/globals.css';
import { ThemeProvider } from './components/theme-providers';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <App />
    </ThemeProvider>
  </StrictMode>,
);
