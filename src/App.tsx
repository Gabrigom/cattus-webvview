import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WebView from './WebView';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WebView />} />
        <Route path="/custom" element={<WebView title="Página Personalizada" content="Conteúdo Customizado" />} />
      </Routes>
    </Router>
  );
};

export default App;
