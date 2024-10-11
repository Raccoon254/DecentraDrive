import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ActorProvider, AgentProvider } from '@ic-reactor/react';
import { idlFactory, canisterId } from './declarations/backend';
import { BrowserRouter } from 'react-router-dom';
import CustomCursor from './components/CustomCursor';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AgentProvider withProcessEnv>
      <ActorProvider idlFactory={idlFactory} canisterId={canisterId}>
        <BrowserRouter>
        <CustomCursor/>
          <App />
        </BrowserRouter>
      </ActorProvider>
    </AgentProvider>
  </React.StrictMode>,
);
