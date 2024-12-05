import React from 'react';

type WebViewProps = {
  title?: string;
  content?: string;
  onAction?: (action: string) => void;
};

const WebView: React.FC<WebViewProps> = ({ title = "Bem-vindo", content = "Este é o conteúdo da WebView.", onAction }) => {
  // Função para enviar mensagens ao app mobile
  const handleAction = (action: string) => {
    if (onAction) {
      onAction(action);
    }
    if (window.ReactNativeWebView) {
      window.ReactNativeWebView.postMessage(action);
    }
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>{title}</h1>
      </header>
      <main style={styles.content}>
        <p>{content}</p>
        <button style={styles.button} onClick={() => handleAction('ACTION_CLICK')}>
          Clique aqui
        </button>
      </main>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '16px',
    textAlign: 'center',
  },
  header: {
    backgroundColor: '#6200ea',
    color: 'white',
    padding: '16px',
    borderRadius: '8px',
  },
  content: {
    margin: '16px 0',
  },
  button: {
    backgroundColor: '#6200ea',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    padding: '8px 16px',
    cursor: 'pointer',
  },
} as const;

export default WebView;
