import React, { useCallback } from 'react';

import { FiAlertCircle, FiXCircle } from 'react-icons/fi';
import { Container, Toast } from './styles';
import { ToastMessage, useToast } from '../../hooks/toast';

interface ToastContainerProps {
  messages: Array<ToastMessage>;
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const { removeToast } = useToast();

  const handleRemoveToast = useCallback((id: string) => removeToast(id), [
    removeToast,
  ]);

  return (
    <Container>
      {messages.map(message => (
        <Toast
          id={message.id}
          hasDescription={Boolean(message.description)}
          type={message.type}
        >
          <FiAlertCircle size={20} />

          <div>
            <strong>{message.title}</strong>
            {message.description && <p>{message.description}</p>}
          </div>

          <button onClick={() => handleRemoveToast(message.id)} type="button">
            <FiXCircle size={18} />
          </button>
        </Toast>
      ))}
    </Container>
  );
};

export default ToastContainer;
