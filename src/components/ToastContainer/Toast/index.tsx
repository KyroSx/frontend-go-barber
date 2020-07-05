import React, { useCallback, useEffect } from 'react';
import { FiAlertCircle, FiXCircle, FiCheckCircle } from 'react-icons/fi';

import { Container } from './styles';
import { ToastMessage, useToast } from '../../../hooks/toast';

interface ToastProps {
  message: ToastMessage;
}

const icons = {
  info: <FiAlertCircle size={24} />,
  error: <FiXCircle size={24} />,
  success: <FiCheckCircle size={24} />,
};

const Toast: React.FC<ToastProps> = ({ message }) => {
  const { removeToast } = useToast();

  const handleRemoveToast = useCallback((id: string) => removeToast(id), [
    removeToast,
  ]);

  useEffect(() => {
    const timer = setTimeout(() => handleRemoveToast(message.id), 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [handleRemoveToast, message.id]);

  return (
    <Container
      hasDescription={Boolean(message.description)}
      type={message.type}
    >
      {icons[message.type || 'info']}

      <div>
        <strong>{message.title}</strong>
        {message.description && <p>{message.description}</p>}
      </div>

      <button onClick={() => handleRemoveToast(message.id)} type="button">
        <FiXCircle size={18} />
      </button>
    </Container>
  );
};

export default Toast;
