import { ChangeEvent, useState } from 'react';

const useHandleInputMessage = () => {
  const [inputMessage, setInputMessage] = useState('');
  const handleInputMessage = (e: ChangeEvent<HTMLInputElement>) => {
    setInputMessage(e.target.value);
  };
  const handleDeleteInputMessage = () => {
    setInputMessage('');
  };

  return { inputMessage, handleInputMessage, handleDeleteInputMessage };
};

export default useHandleInputMessage;
